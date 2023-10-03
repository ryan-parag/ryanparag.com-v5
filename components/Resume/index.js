import React, { useState } from 'react'
import { copyTextToClipboard } from '@/utils/copy'
import {  Header} from "./components"
import Data from "./Data"
import Logo from "@/components/Logo"
import { Certifications, Education, Experience, TagSection } from "./sections"
import { motion } from "framer-motion"

const ResumePage = () => {

  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    copyTextToClipboard()
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return(
    <>
      <Header/>
      <div className="grid grid-cols-12 gap-x-8 border-b border-black border-opacity-10 dark:border-white dark:border-opacity-10">
        <div className="col-span-12 mb-6">
          <div className="h-12 w-12 lg:h-16 lg:w-16 mr-3 transform relative -rotate-6">
            <Logo/>
            <span className="absolute top-0 bottom-0 right-0 left-0 bg-themePrimary blur-lg opacity-30 -z-10"/>
          </div>
        </div>
        <div className="col-span-12 pb-5 border-b border-black border-opacity-10 dark:border-white dark:border-opacity-10 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="w-auto">
            <h1 className="text-4xl lg:text-5xl mb-2">{Data.name}</h1>
            <span className="text-lg lg:text-xl">{Data.role}</span>
          </div>
          <div className="w-full md:w-auto mt-6 mb-3 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:flex">
            <motion.button
              className="button buttonPrimary md:buttonLg relative top-8"
              href={`mailto:${Data.email}?subject=Hey Ryan!`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.3, delay: 0, type: "spring", stiffness: 150 }}
              onClick={() => copyEmail()}
            >
              {copied ? 'Copied' : 'Email Me'}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="ml-1">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 6.5L12 12.25L18.5 6.5"></path>
              </svg>
            </motion.button>
            <motion.a
              className="button md:buttonLg opacity-0 top-8"
              href={Data.pdf}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 150 }}
            >
              Download PDF
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"  className="ml-1">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="1.5" d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9.25H13.75V5"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 15.25H14.25"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 12.25H14.25"></path>
              </svg>
            </motion.a>
          </div>
        </div>
        <motion.div
          className="col-span-12 lg:col-span-9 pt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:border-r border-black border-opacity-10 dark:border-white dark:border-opacity-10 lg:pr-8 opacity-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Experience data={Data.positions}/>
          <Education data={Data.education}/>
          <Certifications data={Data.certs}/>
        </motion.div>
        <motion.div
          className="col-span-12 lg:col-span-3 pt-8 flex w-full flex-col opacity-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <TagSection title="Skills" data={Data.skills}/>
          <TagSection title="Tools" data={Data.experience}/>
        </motion.div>
      </div>
    </>
  )
}

export default ResumePage