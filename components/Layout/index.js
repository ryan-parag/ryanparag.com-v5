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

  const meta = {
    name: 'Ryan Parag',
    description: 'Ryan Parag is a product designer and design engineer helping build systems and products.',
    url: 'https://ryanparag.com'
  }

  return(
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <title>Ryan Parag</title>
        <meta name="title" content={meta.name}/>
        <meta name="description" content={meta.description}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={meta.url}/>
        <meta property="og:title" content={meta.name}/>
        <meta property="og:description" content={meta.description}/>
        <meta property="og:image" content="/social-media.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={meta.url}/>
        <meta property="twitter:title" content={meta.name}/>
        <meta property="twitter:description" content={meta.description}/>
        <meta property="twitter:image" content="/social-media.png"/>
        <meta name="keywords" content="ryan, parag, graphic, web, designer, product, tampa, design, trustlayer, masonite, chargebacks911"/>
        <meta name="robots" content="index, follow"/>
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
      <motion.div
        className="transition absolute top-0 left-0 right-0 overflow-x-hidden h-96 pointer-events-none z-0 overflow-y-hidden"
        initial={{ opacity: 0, height: 0 }}
        whileInView= {{ opacity: 1, height: '400px' }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-96 absolute -top-40 -left-24 -right-24 dark:opacity-20 opacity-40 pointer-events-none blur-2xl z-0"
          style={{
            background: 'linear-gradient(to bottom, var(--md-sys-color-primary), transparent)'
          }}
          initial={{ rotate: 0 }}
          whileInView= {{ rotate: '-8deg' }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 150 }}
          viewport={{ once: true }}
        />
      </motion.div>
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