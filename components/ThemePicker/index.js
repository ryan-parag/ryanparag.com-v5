import React, { useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion';
import ColorPicker from '@/components/ColorPicker';
import Logo from '../Logo';
import Link from 'next/link';

const DarkModeButton = ({ darkMode, setDarkMode, margin }) => {

  const { setTheme } = useTheme();

  const changeDarkMode = () => {
    if(darkMode) {
      setDarkMode(false)
      setTheme('light')
    } else {
      setDarkMode(true)
      setTheme('dark')
    }
  }
  
  return(
    <button
      onClick={() => changeDarkMode()}
      className={`transition relative overflow-hidden h-6 w-6 rounded-full hover:bg-themeBackground text-themeOnSurfaceVariant flex justify-center hover:ring hover:scale-110 ring-white ring-opacity-10 ${!margin && 'ml-2'}`}
    >
      <motion.div
        className={`p-0.5 w-full h-12 grid grid-cols-1 gap-1 absolute`}
        animate={{ top: `${darkMode ? '0px' : '-24px'}` }}
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q13-2 23 3.5t16 14.5q6 9 6.5 21t-7.5 23q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q11-7 22.5-6.5T819-479q10 5 15.5 15t3.5 24q-14 138-117.5 229T480-120Z"/></svg>
      </motion.div>
    </button>
  )
}

const ThemePicker = ({ currentColor, setCurrentColor, themeColors, darkMode, setDarkMode }) => {

  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 600;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  return(
    <motion.div
      className="flex items-center justify-center mb-6 fixed -top-20 rounded-full bg-themeSurfaceVariant shadow-2xl z-20 left-1/2 -translate-x-1/2 py-2 px-1 border dark:border-transparent border-current text-themeBackground opacity-0"
      animate={{ top: '56px', opacity: 1 }}
      transition={{ duration: 0.1, delay: 0.5, type: "spring", stiffness: 150 }}
    >
      <AnimatePresence>
        {
          isVisible && (
            <motion.div
              className="inline-flex items-center opacity-0 w-0 transform origin-center"
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.1, delay: 0.1, type: "spring", stiffness: 150 }}
            >
              <div className="transition h-6 w-6 ml-2 hover:scale-110 hover:rotate-3">
                <Link href="/">
                  <Logo/>
                </Link>
              </div>
              <span className="h-6 w-px ml-4 mr-2 bg-themeOutline opacity-50"/>
            </motion.div>
          )
        }
      </AnimatePresence>
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} margin={isVisible}/>
      <span className="h-6 w-px ml-2 bg-themeOutline opacity-50"/>
      {
        themeColors.map((item,i) => (
          <button
            onClick={() => setCurrentColor(item)}
            className={`theme-item`}
            style={{ background: item }}
            key={i}
          >
            <AnimatePresence>
              {
                currentColor === item && (
                  <motion.span
                    className="h-0 w-0 bg-white ring-2 ring-white ring-opacity-50 rounded-full inline-flex items-center justify-center relative"
                    animate={{ width: '16px', height: '16px' }}
                    exit={{ width: 0, height: 0, opacity: 0 }}
                    transition={{ duration: 0.1, delay: 0, type: "spring", stiffness: 200 }}
                  >
                    <motion.span
                      className="h-0 w-0 rounded-full relative ring-2 ring-white"
                      style={{ background: item }}
                      animate={{ width: '8px', height: '8px' }}
                      exit={{ width: 0, height: 0, opacity: 0 }}
                      transition={{ duration: 0.1, delay: 0.2, type: "spring", stiffness: 200 }}
                    />
                    <motion.span
                      className="rounded-full absolute -top-2 -bottom-2 -right-2 -left-2 blur-sm z-10 opacity-0"
                      style={{ background: item }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 0.1, delay: 0.2, type: "spring", stiffness: 200 }}
                    />
                  </motion.span>
                )
              }
            </AnimatePresence>
          </button>
        ))
      }
      <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor}/>
    </motion.div>
  )
}

export default ThemePicker