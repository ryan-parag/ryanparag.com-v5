import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const gridColsClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
}

const ProjectGallery = ({ images, columns = 1 }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const isOpen = lightboxIndex !== null

  const close = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() =>
    setLightboxIndex(i => (i > 0 ? i - 1 : images.length - 1)), [images.length])

  const next = useCallback(() =>
    setLightboxIndex(i => (i < images.length - 1 ? i + 1 : 0)), [images.length])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Grid */}
      <div className={`grid ${gridColsClasses[columns] || gridColsClasses[1]} gap-4 md:gap-4 my-6`}>
        {images.map((image, i) => (
          <div className="flex flex-col gap-3" key={i}>
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="group relative aspect-video rounded-xl border border-themeOutlineVariant overflow-hidden bg-themeSurfaceVariant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themePrimary"
              aria-label={`View image ${i + 1}: ${image.caption || ''}`}
            >
              <Image
                src={image.src}
                alt={image.caption || ''}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
            {image.caption && (
              <span className="text-themeOnSurfaceVariant text-sm line-clamp-1">{image.caption}</span>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={close}
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-4 flex flex-col items-center gap-4">

              {/* Close */}
              <button
                onClick={close}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 -960 960 960" fill="currentColor">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
              </button>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  className="relative w-full rounded-2xl overflow-hidden bg-black/40"
                  style={{ aspectRatio: '16/10' }}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                >
                  <Image
                    src={images[lightboxIndex].src}
                    alt={images[lightboxIndex].caption || ''}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Caption + counter */}
              <div className="flex items-center justify-between w-full px-1">
                <span className="text-white/60 text-sm">
                  {images[lightboxIndex].caption}
                </span>
                <span className="text-white/40 text-xs tabular-nums">
                  {lightboxIndex + 1} / {images.length}
                </span>
              </div>

              {/* Prev / Next */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 text-white flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur hover:bg-black/60 transition-colors"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960" fill="currentColor">
                      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-white flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur hover:bg-black/60 transition-colors"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960" fill="currentColor">
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                    </svg>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectGallery
