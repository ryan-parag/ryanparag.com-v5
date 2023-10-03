import React, { useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import ColorPicker from '@/components/ColorPicker';
import Logo from '../Logo';
import Link from 'next/link';

const ThemePicker = ({ currentColor, setCurrentColor, themeColors }) => {

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
              className="inline-flex items-center opacity-0 w-0"
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
                    className="h-0 w-0 bg-white ring-2 ring-white ring-opacity-50 rounded-full inline-flex items-center justify-center"
                    animate={{ width: '16px', height: '16px' }}
                    exit={{ width: 0, height: 0, opacity: 0 }}
                    transition={{ duration: 0.1, delay: 0, type: "spring", stiffness: 200 }}
                  >
                    <motion.span
                      className="h-0 w-0 rounded-full"
                      style={{ background: item }}
                      animate={{ width: '8px', height: '8px' }}
                      exit={{ width: 0, height: 0, opacity: 0 }}
                      transition={{ duration: 0.1, delay: 0.2, type: "spring", stiffness: 200 }}
                    />
                  </motion.span>
                )
              }
            </AnimatePresence>
          </button>
        ))
      }
      <ColorPicker setCurrentColor={setCurrentColor}/>
    </motion.div>
  )
}

export default ThemePicker