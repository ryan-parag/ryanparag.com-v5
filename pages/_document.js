import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head/>
      <body id="body">
        <Main />
        <div
          className="fixed top-0 bottom-0 left-0 right-0 noise-bg z-1 opacity-30 pointer-events-none"
        />
        <NextScript />
      </body>
    </Html>
  )
}
