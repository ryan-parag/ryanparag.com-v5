import React, { useState } from 'react'
import Link from "next/link"
import Colophon from "../Colophon"
import Memoji from "../Memoji"
import { copyTextToClipboard } from "@/utils/copy"
import { motion } from 'framer-motion';
import { Toast } from '@base-ui-components/react'
import { PreviewCard } from '@base-ui-components/react'
import PreviewLink from '@/components/PreviewLink'

const LinkSection = () => {

  const toastManager = Toast.useToastManager();
  
  const createToast = () => {
    copyTextToClipboard()
    toastManager.add({
      title: `Email Address Copied ✉️`,
      description: 'You copied the email address to your clipboard.',
    });
  }

  return(
    <motion.div
      className="grid grid-cols-2 gap-4 md:gap-0 md:flex flex-col md:flex-row my-6 top-4 relative"
      initial={{ opacity: 0 }}
      whileInView= {{ opacity: 1, top: 0 }}
      transition={{ duration: 0.3, delay: .2, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}
    >
      <button onClick={() => createToast()} className="button buttonPrimary w-full md:w-auto md:mr-4">Copy Email</button>
      <a href="https://google.com" className="button w-full md:w-auto md:mr-4">
        <svg fill="currentColor" className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        LinkedIn
      </a>
      <Link href="/resume">
        <span className="button w-full md:w-auto">
          <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M360-240h240q17 0 28.5-11.5T640-280q0-17-11.5-28.5T600-320H360q-17 0-28.5 11.5T320-280q0 17 11.5 28.5T360-240Zm0-160h240q17 0 28.5-11.5T640-440q0-17-11.5-28.5T600-480H360q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160Z"/></svg>
          Resume
        </span>
      </Link>
    </motion.div>
  )
}

const ArrowSvg = () => {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className={'ArrowFill'}
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className={'ArrowOuterStroke'}
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className={'ArrowInnerStroke'}
      />
    </svg>
  );
}

const AboutContent = () => {
  return(
    <div className="section">
      <Memoji/>
      <motion.section
        className="relative top-8"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.3, delay: .5, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <h1>About</h1>
        <h3 className="spatial text-sm mb-4">Career</h3>
        <p>
          Currently, I&apos;m designing at <PreviewLink label="Owens Corning" href="https://owenscorning.com" img="/projects/preview-oc.png" description="https://owenscorning.com"/>, where I&apos;m helping create leading software/systems for builders, contractors, homeowners, and other building materials customers (+ some cool 0-1 projects long the way).
        </p>
        <p>
          Previously, I was designing at <PreviewLink label="TrustLayer" href="https://trustlayer.io" img="/projects/preview-tl.png" description="https://trustlayer.io"/>, where I worked on collaborative tools where businesses can share insurance verification and begin working together with less difficulty through the use of automation and AI.
        </p>
        <p>
          Before that, I was on the digital innovation team at <PreviewLink label="Masonite" href="https://masonite.com" img="/projects/preview-masonite.png" description="https://masonite.com"/> — conceptualizing a simpler home remodeling experience and designing multiple smart-home experiences for homeowners, builders, and internal teams. I got my start at <PreviewLink label="Chargebacks911" href="https://chargebacks911.com" img="/projects/preview-cb911.png" description="https://chargebacks911.com"/> , designing digital tools for fraud-auditing teams at banks.
        </p>
      </motion.section>
      <LinkSection/>
      <motion.section
        className="relative top-8"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.3, delay: .2, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <h3 className="spatial text-sm mb-4">Education</h3>
        <p>
          In a previous life, I studied Healthcare Informatics and Biology. After graduating, I crunched the numbers for pricing model forecasts as a healthcare analyst - and in my after hours I cut my teeth designing as a freelancer, for a diverse group of clients <i>(global non-profits, restaurants, pre-seed startups, musicians etc.)</i>.
        </p>
      </motion.section>
      <motion.section
        className="relative top-8"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.3, delay: .2, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <h3 className="spatial text-sm mb-4">Misc.</h3>
        <p>
          I thrive in fast-paced, collaborative environments and am committed to being transparent in my work. In my free time, you can find me tinkering on a random project, finding the first window seat on a flight 🛫, biking around town 🚴‍♂️, and more 🎸 🥐 🏎!
        </p>
      </motion.section>
      <div className="section !px-0">
        <div className="h-px bg-themeOutline w-20 my-12"/>
      </div>
      <motion.section
        className="relative top-8"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.3, delay: .2, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <Colophon/>
      </motion.section>
      <div className="section !px-0">
        <div className="h-px bg-themeOutline w-20 my-12"/>
      </div>
    </div>
  )
}

export default AboutContent