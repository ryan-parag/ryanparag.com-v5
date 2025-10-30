import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  const meta = {
    name: 'Ryan Parag',
    description: 'Ryan Parag is a product designer and design engineer helping build systems and products.',
    url: 'https://ryanparag.com'
  }

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="icon" type="image/png" href="/favicon.png"/>
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
