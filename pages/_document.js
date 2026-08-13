import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  const meta = {
    name: 'Ryan Parag',
    url: 'https://ryanparag.com'
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ryan Parag',
    url: meta.url,
    jobTitle: 'Product Designer & Design Lead',
    worksFor: {
      '@type': 'Organization',
      name: 'Owens Corning'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tampa',
      addressRegion: 'FL',
      addressCountry: 'US'
    },
    sameAs: [
      'https://github.com/ryan-parag',
      'https://dribbble.com/ryanparag',
      'https://www.linkedin.com/in/ryan-parag'
    ],
    knowsAbout: [
      'Product Design',
      'UX Design',
      'User Experience',
      'Design Systems',
      'SaaS Platforms',
      'Product Strategy',
      'Front-End Development'
    ]
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: meta.name,
    url: meta.url
  }

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="/social-media.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:image" content="/social-media.png"/>
        <meta name="keywords" content="ryan, parag, product designer, design lead, ux design, design systems, tampa, saas, trustlayer, masonite, chargebacks911, owens corning"/>
        <meta name="robots" content="index, follow"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
