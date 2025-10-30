import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { checkMode } from '@/utils/darkMode';
import { argbFromHex, themeFromSourceColor, applyTheme } from "@material/material-color-utilities";
import ThemePicker from '@/components/ThemePicker';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Script from 'next/script'
import Navigation from '@/components/Navigation';
import GradientHeader from '@/components/GradientHeader';

const Layout = ({ children }) => {

  const themeColors = [
    '#00d1b2',
    '#E684AF',
    '#EAC234',
    '#FF8A00',
    '#5D0FDD'
  ]

  const updateLocalStorage = (color) => {
    localStorage.setItem('ryanparagTheme', color);
  }

  const checkedSavedTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (localStorage.getItem('ryanparagTheme') !== null) {
        return localStorage.getItem('ryanparagTheme')
      }
    } else return false
  }

  const { theme, systemTheme, setTheme } = useTheme();

  const [currentColor, setCurrentColor] = useState(checkedSavedTheme() ? checkedSavedTheme : themeColors[0])
  const [darkMode, setDarkMode] = useState(checkMode(theme, systemTheme))

  const runColor = (color) => {
    const theme = themeFromSourceColor(argbFromHex(color));
    return theme
  }

  useEffect(() => {
    applyTheme(runColor(currentColor), {target: document.getElementById('body'), dark: darkMode})
    updateLocalStorage(currentColor)
  }, [currentColor, darkMode]);

  return(
    <>
      <Head>
        <title>Ryan Parag — Product Designer</title>
      </Head>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.GA_TRACKING_ID}');
        `}
      </Script>
      <GradientHeader/>
      <Navigation/>
      <main
        className={`w-full pt-40`}
      >
        <ThemePicker
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          themeColors={themeColors}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        {children}
      </main>
      <motion.footer
        className="bg-themeSurfaceVariant text-themeOnSurfaceVariant pt-16 pb-24 w-full mt-16"
        style={{
          background: 'linear-gradient(to top, var(--md-sys-color-surface-variant), transparent)'
        }}
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        <div className="section px-4 md:!px-0">
          <Footer/>
        </div>
      </motion.footer>
    </>
  )
}

export default Layout