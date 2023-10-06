import React, { useState } from 'react'
import { copyTextToClipboard } from '@/utils/copy'
import {  Header} from "./components"
import Data from "./Data"
import Logo from "@/components/Logo"
import { Certifications, Education, Experience, TagSection } from "./sections"
import { motion } from "framer-motion"
import { Title } from './components'

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
        <div className="col-span-12 pb-5 border-b border-black border-opacity-10 dark:border-white dark:border-opacity-10 grid grid-cols-12 gap-3">
          <div className="w-full col-span-12 lg:col-span-7 xl:col-span-9">
            <h1 className="text-4xl lg:text-5xl mb-2">{Data.name}</h1>
            <span className="text-lg lg:text-xl">{Data.role}</span>
          </div>
          <motion.div
            className="col-span-12 lg:col-span-5 xl:col-span-3 grid grid-cols-1 gap-3 w-full mt-6 mb-3 md:mt-0 rounded-xl bg-themeSurfaceVariant text-themeOnSurfaceVariant p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, top: 0 }}
            transition={{ duration: 0.3, delay: 0.5, type: "spring", stiffness: 150 }}
          >
            <Title flat>Contact</Title>
            <div className="flex items-center">
              <span>p*********@gmail.com</span>
              <span className="h-4 w-px mx-2 bg-themeOnSurfaceVariant opacity-50"/>
              <button onClick={() => copyEmail()} className="link-shadow">{copied ? 'Copied' : 'Copy Email'}</button>
            </div>
            <div className="flex items-center">
              <span className="truncate">{Data.pdf}</span>
              <span className="h-4 w-px mx-2 bg-themeOnSurfaceVariant opacity-50"/>
              <a className="link-shadow" href={`/${Data.pdf}`} target="_blank">Download</a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="col-span-12 lg:col-span-7 xl:col-span-9 pt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:border-r border-black border-opacity-10 dark:border-white dark:border-opacity-10 lg:pr-8 opacity-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Experience data={Data.positions}/>
          <Education data={Data.education}/>
          <Certifications data={Data.certs}/>
        </motion.div>
        <motion.div
          className="col-span-12 lg:col-span-5 xl:col-span-3 pt-8 flex w-full flex-col opacity-0"
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