import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { motion } from 'framer-motion'

export default function Document() {

  return (
    <Html lang="en">
      <Head/>
      <body id="body">
        <div
          className="transition absolute top-0 left-0 right-0 overflow-x-hidden h-96 pointer-events-none z-0"
        >
          <div
            className="h-96 absolute -top-40 -rotate-6 -left-24 -right-24 dark:opacity-20 opacity-40 pointer-events-none blur-2xl z-0"
            style={{
              background: 'linear-gradient(to bottom, var(--md-sys-color-primary), transparent)'
            }}
          />
        </div>
        <Main />
        <div
          className="fixed top-0 bottom-0 left-0 right-0 noise-bg z-1 opacity-30 pointer-events-none"
        />
        <NextScript />
      </body>
    </Html>
  )
}
