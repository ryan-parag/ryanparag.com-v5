import React, { useState, useEffect } from 'react'
import Randomizer from "../Randomizer"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { copyTextToClipboard } from "@/utils/copy";
import XP from '../XP';
import Connect from '../Connect';
import { HalftoneCmyk, FlutedGlass, HalftoneDots, ImageDithering } from '@paper-design/shaders-react';

const AVATARS = [
  { id: 'photo', label: 'Photo', image: '/avatar.png', alt: "Ryan's face" },
  { id: 'animated', label: 'Animated', animated: true, alt: "Animated pixel art of Ryan" },
  { id: 'dbz', label: 'Dragon Ball Z', image: '/avatars/dbz.png', alt: "Ryan as a Dragon Ball Z character" },
  { id: 'animal-crossing', label: 'Animal Crossing', image: '/avatars/animal-crossing.png', alt: "Ryan as an Animal Crossing villager" },
  { id: 'jrpg', label: 'JRPG', image: '/avatars/jprg.png', alt: "Ryan as a Japanese RPG character" },
]

// Idle loop through the three poses, with a quick blink at the end
const ANIMATION_FRAMES = [
  '/avatars/animated_avatar_1.png',
  '/avatars/animated_avatar_2.png',
  '/avatars/animated_avatar_3.png',
  '/avatars/animated_avatar_blink.png',
]
const ANIMATION_SEQUENCE = [
  { frame: 0, duration: 500 },
  { frame: 1, duration: 500 },
  { frame: 2, duration: 500 },
  { frame: 1, duration: 500 },
  { frame: 0, duration: 500 },
  { frame: 1, duration: 500 },
  { frame: 2, duration: 500 },
  { frame: 3, duration: 150 },
]

const FILTERS = [
  { id: 'default', label: 'No Filter' },
  { id: 'halftone', label: 'Halftone CMYK' },
  { id: 'dots', label: 'Halftone Dots' },
  { id: 'fluted-glass', label: 'Fluted Glass' },
  { id: 'dithering', label: 'Image Dithering' },
]

const shaderStyle = { width: '100%', height: '100%' }

const readDitheringColors = () => {
  const style = getComputedStyle(document.body)
  return {
    colorFront: style.getPropertyValue('--md-sys-color-on-background').trim() || '#000000',
    colorBack: style.getPropertyValue('--md-sys-color-background').trim() || '#ffffff',
    colorHighlight: style.getPropertyValue('--md-sys-color-primary').trim() || '#00d1b2',
  }
}

const useDitheringColors = () => {
  const [colors, setColors] = useState({
    colorFront: '#000000',
    colorBack: '#ffffff',
    colorHighlight: '#00d1b2',
  })

  useEffect(() => {
    setColors(readDitheringColors())
    const observer = new MutationObserver(() => setColors(readDitheringColors()))
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] })
    return () => observer.disconnect()
  }, [])

  return colors
}

const AnimatedAvatar = ({ alt }) => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(
      () => setStep(current => (current + 1) % ANIMATION_SEQUENCE.length),
      ANIMATION_SEQUENCE[step].duration
    )
    return () => clearTimeout(timeout)
  }, [step])

  const activeFrame = ANIMATION_SEQUENCE[step].frame

  // All frames stay mounted so they're preloaded and swapping never flickers
  return ANIMATION_FRAMES.map((src, i) => (
    <Image
      key={src}
      src={src}
      fill
      sizes="120px"
      alt={i === 0 ? alt : ''}
      aria-hidden={i !== 0}
      className="object-cover z-10"
      style={{ opacity: i === activeFrame ? 1 : 0 }}
    />
  ))
}

const AvatarImage = ({ avatar, filter, ditheringColors }) => {
  if (avatar.animated) return <AnimatedAvatar alt={avatar.alt} />
  const { image } = avatar
  if (filter === 'halftone') return <HalftoneCmyk image={image} style={shaderStyle} />
  if (filter === 'dots') return <HalftoneDots image={image} style={shaderStyle} />
  if (filter === 'fluted-glass') return <FlutedGlass image={image} style={shaderStyle} />
  if (filter === 'dithering') return <ImageDithering image={image} style={shaderStyle} {...ditheringColors} />
  return <Image src={image} fill sizes="96px" className="z-10 object-cover" alt={avatar.alt} />
}

const MenuButton = ({ isActive, disabled, onClick, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-left text-xs px-2 py-1.5 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
      isActive
        ? 'bg-themePrimaryContainer text-themePrimary font-semibold'
        : 'enabled:hover:bg-themeSurfaceVariant'
    }`}
  >
    {children}
  </button>
)

const MenuHeading = ({ children }) => (
  <span className="text-[10px] uppercase tracking-wider opacity-60 px-2 pt-1 pb-0.5">{children}</span>
)

const Intro = () => {
  const [activeAvatarId, setActiveAvatarId] = useState('photo')
  const [activeFilter, setActiveFilter] = useState('default')
  const [isHovered, setIsHovered] = useState(false)
  const ditheringColors = useDitheringColors()
  const activeAvatar = AVATARS.find(avatar => avatar.id === activeAvatarId)
  // Shaders work on a single still image, so they're off for the animated avatar
  const filtersDisabled = !!activeAvatar.animated

  return(
    <>
      <div className={'section'}>
        <div
          className="relative inline-flex flex-col items-center mb-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="bg-themeSurfaceVariant h-24 w-24 p-1 rounded-full relative inline-flex items-center justify-center"
            initial={{ opacity: 0, top: '24px' }}
            whileInView={{ opacity: 1, top: 0 }}
            transition={{ duration: 0.1, delay: 0.2, type: "spring", stiffness: 150 }}
            viewport={{ once: true }}
          >
            <div className="bg-themeSurface h-full w-full p-1 rounded-full relative inline-flex items-center justify-center">
              <motion.div
                className="relative rounded-full w-full h-full overflow-hidden z-10 opacity-0"
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 150 }}
              >
                <AvatarImage
                  avatar={activeAvatar}
                  filter={filtersDisabled ? 'default' : activeFilter}
                  ditheringColors={ditheringColors}
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-amber-500 via-emerald-500 to-blue-500 transform rotate-45 opacity-30 blur-sm -z-10" />
                
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-gradient-to-b from-pink-500 to-transparent opacity-50 blur-sm animate-spin -z-10" style={{ animationDuration: '4000ms' }}/>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg bg-white w-8 h-8 z-0"/>
              </motion.div>
              <motion.div
                className="absolute opacity-0 top-0 bottom-0 left-0 right-0 bg-themePrimary blur-xl rounded-full z-0"
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 150 }}
              />
            </div>
          </motion.div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-30 bg-themeSurface border border-themeOutlineVariant shadow-md rounded-xl p-1.5 flex flex-col gap-0.5 w-44"
                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                transition={{ duration: 0.15, type: "spring", stiffness: 300, damping: 20 }}
              >
                <MenuHeading>Avatar</MenuHeading>
                {AVATARS.map(avatar => (
                  <MenuButton
                    key={avatar.id}
                    isActive={activeAvatarId === avatar.id}
                    onClick={() => setActiveAvatarId(avatar.id)}
                  >
                    {avatar.label}
                  </MenuButton>
                ))}
                <div className="h-px bg-themeOutlineVariant my-1 mx-1" />
                <MenuHeading>Filter</MenuHeading>
                {FILTERS.map(filter => (
                  <MenuButton
                    key={filter.id}
                    isActive={!filtersDisabled && activeFilter === filter.id}
                    disabled={filtersDisabled}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    {filter.label}
                  </MenuButton>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.h1
          className="text-4xl lg:text-5xl mb-2 md:mb-4 top-8 opacity-0 relative"
          animate={{ top: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5, type: "spring", stiffness: 150 }}
        >
            Hello, I&apos;m Ryan.👋
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg lg:text-2xl leading-loose mb-8 top-8 opacity-0 relative"
          animate={{ top: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6, type: "spring", stiffness: 150 }}
        >
            I&apos;m a product designer and <Randomizer/>.
        </motion.p>
        <Link href="/about">
          <motion.span
            className="button buttonLg buttonPrimary opacity-0 top-4"
            animate={{ opacity: 1, top: 0 }}
            transition={{ duration: 0.3, delay: 0.7, type: "spring", stiffness: 150 }}
          >
            More Info
          </motion.span>
        </Link>
        <div className="h-px bg-themeOutline w-20 my-16"/>
      </div>
      <XP/>
      <Connect/>
    </>
  )
}

export default Intro
