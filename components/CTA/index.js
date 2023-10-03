import React, { useState } from 'react'
import Image from 'next/image';
import { copyTextToClipboard } from '@/utils/copy';
import { motion } from 'framer-motion';

const CTA = () => {

  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    copyTextToClipboard()
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return(
    <section className="section px-4 md:!px-0 pt-20">
      <article className="bg-themeSurfaceVariant rounded-xl p-4 md:p-6 pt-16 md:pt-16 relative">
        <div className="bg-themeSurfaceVariant inline-flex items-center justify-center rounded-full h-28 w-28 p-2 absolute -top-12 left-6">
          <div className="bg-themeSurface w-full h-full rounded-full relative">
            <Image src="/memoji.png" layout="fill" alt="Ryan's face"/>
          </div>
        </div>
        <h3>Want a closer look into my work?</h3>
        <p>Let&apos;s chat if you&apos;d like a more in-depth view into my design process and the past projects I&apos;ve worked on.</p>
          <div className="flex flex-col md:flex-row items-start md:items-center mt-2">
            <button onClick={() => copyEmail()} className="w-full md:w-auto button buttonLg buttonPrimary">Copy email address</button>
            <span className={`text-sm mt-4 md:mt-0 ml-0 md:ml-4`}>
              {
                copied ? (
                  <motion.span
                    className="inline-flex items-center opacity-0"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0, type: "spring", stiffness: 200 }}
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="mr-1 text-themePrimary">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
                    </svg>
                    Copied
                  </motion.span>
                )
                : (
                  'pa********@gmail.com'
                )
              }
            </span>
          </div>
      </article>
    </section>
  )
}

export default CTA