import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { themeFromImage, applyTheme } from "@material/material-color-utilities"
import { checkMode } from "@/utils/darkMode"

const cardVariants = {
  rest: { y: 0 },
  hover: { y: 0 },
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06 },
}

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
}

const overlayContentVariants = {
  rest: { opacity: 0, y: 12 },
  hover: { opacity: 1, y: 0 },
}

const logoContentVariants = {
  rest: { opacity: 0, y: 12 },
  hover: { opacity: 1, y: 0 },
}

const springTransition = { delay: 0.3, type: "spring", stiffness: 300, damping: 30 }

const HoverCard = ({ title, logo, product, tagline, image, onClick, className = "h-72" }) => {
  const cardRef = useRef(null)
  const { theme, systemTheme } = useTheme()
  const hasOverlay = Boolean(title || tagline || logo)

  useEffect(() => {
    if (!hasOverlay || !image) return
    let cancelled = false
    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.src = image
    img.onload = () => {
      themeFromImage(img).then((imageTheme) => {
        if (!cancelled && cardRef.current) {
          applyTheme(imageTheme, { target: cardRef.current, dark: checkMode(theme, systemTheme) })
        }
      })
    }
    return () => { cancelled = true }
  }, [hasOverlay, image, theme, systemTheme])

  return (
    <motion.button
      ref={cardRef}
      type="button"
      onClick={onClick}
      aria-label={title || product || "View image"}
      className={`${className} w-full text-left bg-themeSurface border border-themeOutlineVariant relative rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themePrimary`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
      transition={springTransition}
    >
      <motion.div
        className="absolute inset-0"
        style={{ background: `url(${image}) no-repeat center/cover` }}
        variants={imageVariants}
        transition={springTransition}
      />
      {hasOverlay && (
        <>
          <motion.div
            className="absolute inset-0 bg-themeSurfaceVariant backdrop-blur"
            variants={overlayVariants}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
          {(logo || title) && (
            <motion.div
              className="top-0 left-0 right-0 absolute flex p-4 items-center gap-2 justify-start"
              variants={logoContentVariants}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {logo && (
                <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                  <Image src={logo} alt={title || ""} fill={true} />
                </div>
              )}
              {title && <strong className="font-bold">{title}</strong>}
            </motion.div>
          )}
          {tagline && (
            <motion.div
              className="absolute inset-0 flex p-4 flex-col gap-2 justify-end"
              variants={overlayContentVariants}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p className="text-base">{tagline}</p>
            </motion.div>
          )}
        </>
      )}
    </motion.button>
  )
}

export default HoverCard
