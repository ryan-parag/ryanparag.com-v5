import React, { useState, useEffect } from 'react'
import { argbFromHex, themeFromSourceColor, applyTheme } from "@material/material-color-utilities";
import ThemePicker from '@/components/ThemePicker';
import Logo from '../Logo';

const Layout = ({ children }) => {

  const themeColors = [
    '#00d1b2',
    '#E684AF',
    '#5D0FDD',
    '#EAC234',
    '#EC371E'
  ]

  const [currentColor, setCurrentColor] = useState(themeColors[0])

  const runColor = (color) => {
    const theme = themeFromSourceColor(argbFromHex(color));
    return theme
  }

  useEffect(() => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(runColor(currentColor), {target: document.getElementById('body'), dark: systemDark})
  }, [currentColor]);

  return(
    <>
      <main
        className={`w-full`}
      >
        <ThemePicker
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          themeColors={themeColors}
        />
        {children}
      </main>
      <footer
        className="bg-themeSurfaceVariant text-themeOnSurfaceVariant px-4 py-16 w-full mt-16"
        style={{
          background: 'linear-gradient(to top, var(--md-sys-color-surface-variant), transparent)'
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center">
            <div className="h-8 w-8 mr-3 transform relative">
              <Logo/>
              <span className="absolute top-0 bottom-0 right-0 left-0 bg-themePrimary blur-lg opacity-50 -z-10"/>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm">Ryan Parag</span>
              <span className="text-xs opacity-70">Product Designer</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout