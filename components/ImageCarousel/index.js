import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import 'pasito/styles.css'
import { Stepper, useAutoPlay } from 'pasito'
import { argbFromHex, themeFromSourceColor, applyTheme } from "@material/material-color-utilities";
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { checkMode } from '@/utils/darkMode';

const ImageCarousel = ({ images, company, color }) => {

  const [currentColor, setCurrentColor] = useState(color)
  const [active, setActive] = useState(0)
  const [loadedMap, setLoadedMap] = useState({})

  const { theme, systemTheme } = useTheme();

  const runColor = (color) => {
    const theme = themeFromSourceColor(argbFromHex(color));
    return theme
  }

  const { playing, toggle, filling, fillDuration } = useAutoPlay({
    count: images.length,
    active,
    onStepChange: setActive,
    stepDuration: 5000,
    loop: true,
  })

  useEffect(() => {
    applyTheme(runColor(currentColor), {target: document.getElementById(`${company}-theme`), dark: checkMode(theme,systemTheme)})
  }, [currentColor]);

  const handlePrev = () => setActive(i => Math.max(0, i - 1));
  const handleNext = () => setActive(i => Math.min(images.length - 1, i + 1));

  return (
    <motion.div
      id={`${company}-theme`}
      className="max-w-4xl mx-auto my-6 relative top-8"
      initial={{ opacity: 0, rotate: '2deg' }}
      whileInView={{ opacity: 1, top: 0, rotate: 0 }}
      transition={{ duration: 0.3, delay: .2, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}
    >
      <div className="bg-themeSurfaceVariant text-themeOnSurfaceVariant relative flex flex-col rounded-2xl p-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-full aspect-video bg-themeSurfaceVariant">
              {!loadedMap[active] && (
                <div className="absolute inset-0 animate-pulse bg-black/10 rounded-t-xl" />
              )}
              <Image
                className="rounded-t-xl object-cover"
                src={images[active].src}
                alt={images[active].caption || ''}
                fill
                onLoad={() => setLoadedMap(m => ({ ...m, [active]: true }))}
              />
            </div>

            <span className="w-full text-left mt-2 text-xs block px-4 pt-1 pb-3">{images[active].caption}</span>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-auto gap-3 flex items-center justify-between mx-auto">
          <button
            onClick={handlePrev}
            disabled={active === 0}
            className="text-white flex h-8 w-8 items-center justify-center rounded-full bg-black/20 backdrop-blur-xl transition-colors hover:bg-black/30 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" height="24px" fill="currentColor"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
          </button>

          <div className="flex items-center pasito-override">
            <Stepper
              count={images.length}
              active={active}
              onStepClick={setActive}
              filling={filling}
              fillDuration={fillDuration}
            />
          </div>

          <button
            onClick={toggle}
            disabled={active === images.length - 1}
            className="text-white flex h-8 w-8 items-center justify-center rounded-full bg-black/20 backdrop-blur-xl transition-colors hover:bg-black/30 disabled:opacity-50 disabled:pointer-events-none"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 -960 960 960" fill="currentColor"><path d="M640-200q-33 0-56.5-23.5T560-280v-400q0-33 23.5-56.5T640-760q33 0 56.5 23.5T720-680v400q0 33-23.5 56.5T640-200Zm-320 0q-33 0-56.5-23.5T240-280v-400q0-33 23.5-56.5T320-760q33 0 56.5 23.5T400-680v400q0 33-23.5 56.5T320-200Z"/></svg>
            ) : (
              <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M320-273v-414q0-17 12-28.5t28-11.5q5 0 10.5 1.5T381-721l326 207q9 6 13.5 15t4.5 19q0 10-4.5 19T707-446L381-239q-5 3-10.5 4.5T360-233q-16 0-28-11.5T320-273Z"/></svg>
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={active === images.length - 1}
            className="text-white flex h-8 w-8 items-center justify-center rounded-full bg-black/20 backdrop-blur-xl transition-colors hover:bg-black/30 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"viewBox="0 -960 960 960" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ImageCarousel
