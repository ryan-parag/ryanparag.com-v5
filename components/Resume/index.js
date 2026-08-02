import React, { useState } from 'react'
import { copyTextToClipboard } from '@/utils/copy'
import {  Header} from "./components"
import Data from "./Data"
import Logo from "@/components/Logo"
import { Certifications, Education, Experience, TagSection, About } from "./sections"
import { motion } from "framer-motion"
import { Title } from './components'
import { Toast } from '@base-ui-components/react'
import SideNav from './SideNav'
import ResumeDownloadButton from './ResumeDownloadButton'

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
            <span className="text-sm lg:text-base opacity-70"> · {Data.location}</span>
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
              Email:
              <button onClick={() => createToast()} className="link-shadow transform active:scale-95 inline-flex items-center gap-1">
                <span>p*********@gmail.com</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
              </button>
            </div>
            <div className="flex items-center">
              Resume:
              <ResumeDownloadButton className="link-shadow transform active:scale-95 inline-flex items-center gap-1"/>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="col-span-12 pt-8 grid grid-cols-1 opacity-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <About/>
          <Experience data={Data.positions}/>
          <Education data={Data.education}/>
          <Certifications data={Data.certifications}/>
        </motion.div>
        <motion.div
          className="col-span-12 pt-8 flex w-full flex-col opacity-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <TagSection id="skills" title="Skills" data={Data.skills}/>
          <TagSection id="tools" title="Tools" data={Data.tools}/>
        </motion.div>
      </div>
      <SideNav/>
    </>
  )
}

export default ResumePage