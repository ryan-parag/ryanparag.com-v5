import React, { useState, useEffect } from 'react'
import { argbFromHex, themeFromSourceColor, applyTheme } from "@material/material-color-utilities";
import ThemePicker from '@/components/ThemePicker';
import Footer from '../Footer';

const Layout = ({ children }) => {

  const themeColors = [
    '#00d1b2',
    '#E684AF',
    '#5D0FDD',
    '#EAC234',
    '#EC371E'
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

  const [currentColor, setCurrentColor] = useState(checkedSavedTheme() ? checkedSavedTheme : themeColors[0])

  const runColor = (color) => {
    const theme = themeFromSourceColor(argbFromHex(color));
    return theme
  }

  useEffect(() => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(runColor(currentColor), {target: document.getElementById('body'), dark: systemDark})
    updateLocalStorage(currentColor)
  }, [currentColor]);

  return(
    <>
      <main
        className={`w-full pt-40`}
      >
        <ThemePicker
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          themeColors={themeColors}
        />
        {children}
      </main>
      <footer
        className="bg-themeSurfaceVariant text-themeOnSurfaceVariant py-16 w-full mt-16"
        style={{
          background: 'linear-gradient(to top, var(--md-sys-color-surface-variant), transparent)'
        }}
      >
        <div className="section px-4 md:!px-0">
          <Footer/>
        </div>
      </footer>
    </>
  )
}

export default Layout