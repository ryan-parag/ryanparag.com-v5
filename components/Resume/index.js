import React, { useState } from 'react'
import { copyTextToClipboard } from '@/utils/copy'
import {  Header} from "./components"
import Data from "./Data"
import Logo from "@/components/Logo"
import { Certifications, Education, Experience, TagSection } from "./sections"
import { motion } from "framer-motion"
import { Title } from './components'
import { Toast } from '@base-ui-components/react'

const ResumePage = () => {

  const toastManager = Toast.useToastManager();
      
  const createToast = () => {
    copyTextToClipboard()
    toastManager.add({
      title: `Email Address Copied ✉️`,
      description: 'You copied the email address to your clipboard.',
    });
  }

  return(
    <>
      <div className="w-full max-w-2xl mx-auto grid grid-cols-12 gap-x-8">
        <div className="col-span-12 mb-6 gap-4 flex items-center">
          <div className="h-16 w-16 transform relative top-1 -rotate-6">
            <Logo/>
            <span className="absolute top-0 bottom-0 right-0 left-0 bg-themePrimary blur-lg opacity-30 -z-10"/>
          </div>
          <div className="w-full col-span-12 lg:col-span-7 xl:col-span-9">
            <h1 className="text-2xl lg:text-3xl mb-0">{Data.name}</h1>
            <span className="text-sm lg:text-base">{Data.role}</span>
          </div>
        </div>
        <div className="col-span-12 pb-5 border-b border-black border-opacity-10 dark:border-white dark:border-opacity-10 grid grid-cols-12 gap-3">
          <motion.div
            className="col-span-12 grid grid-cols-1 gap-3 w-full mt-6 mb-3 md:mt-0 rounded-xl bg-themeSurfaceVariant text-themeOnSurfaceVariant p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, top: 0 }}
            transition={{ duration: 0.3, delay: 0.5, type: "spring", stiffness: 150 }}
          >
            <Title flat>Contact</Title>
            <div className="flex items-center">
              <span>p*********@gmail.com</span>
              <span className="h-4 w-px mx-2 bg-themeOnSurfaceVariant opacity-50"/>
              <button onClick={() => createToast()} className="link-shadow transform active:scale-95">Copy Email</button>
            </div>
            <div className="flex items-center">
              <span className="truncate">{Data.pdf}</span>
              <span className="h-4 w-px mx-2 bg-themeOnSurfaceVariant opacity-50"/>
              <a className="link-shadow transform active:scale-95" href={`/${Data.pdf}`} target="_blank">Download</a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="col-span-12 pt-8 grid grid-cols-1 opacity-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Experience data={Data.positions}/>
          <Education data={Data.education}/>
          <Certifications data={Data.certs}/>
        </motion.div>
        <motion.div
          className="col-span-12 pt-8 flex w-full flex-col opacity-0"
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