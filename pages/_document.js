import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body id="body">
        <div className="absolute top-0 left-0 right-0 overflow-x-hidden">
          <div
            className="h-80 absolute -top-40 -rotate-12 -left-24 -right-24 dark:opacity-20 opacity-40 pointer-events-none z-0"
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
