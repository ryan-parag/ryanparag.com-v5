import React, { useState, useRef } from 'react'
import Image from 'next/image';
import { copyTextToClipboard } from '@/utils/copy';
import { motion, useInView } from 'framer-motion';
import { Toast } from '@base-ui-components/react';

const CTA = () => {

  const toastManager = Toast.useToastManager();
    
  const createToast = () => {
    copyTextToClipboard()
    toastManager.add({
      title: `Email Address Copied ✉️`,
      description: 'You copied the email address to your clipboard.',
    });
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  return(
    <section className="section px-4 md:!px-0 pt-20">
      <motion.article
        className="bg-themeSurfaceVariant rounded-xl p-4 md:p-6 pt-16 md:pt-16 relative opacity-0"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1 }}
        transition={{ duration: 0.3, delay: .1, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-themeSurfaceVariant inline-flex items-center justify-center rounded-full h-28 w-28 p-2 absolute left-6"
          initial={{ opacity: 0, top: 0 }}
          whileInView= {{ opacity: 1, top: '-48px' }}
          transition={{ duration: 0.3, delay: .3, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
        >
          <div className="bg-themeSurface w-full h-full rounded-full relative">
            <Image src="/memoji/memoji-thanks.png" fill alt="Ryan's face"/>
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView= {{ opacity: 1, top: 0 }}
          transition={{ duration: 0.3, delay: .1, type: "spring", stiffness: 80 }}
          className="text-xl md:text-3xl top-4 relative"
          viewport={{ once: true }}
        >
          Want a closer look into my work?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView= {{ opacity: 1, top: 0 }}
          transition={{ duration: 0.3, delay: .2, type: "spring", stiffness: 80 }}
          className="top-4 relative"
          viewport={{ once: true }}
        >
          Let&apos;s chat if you&apos;d like a more in-depth view into my design process and the past projects I&apos;ve worked on.</motion.p>
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center mt-2 top-4 relative"
            initial={{ opacity: 0 }}
            whileInView= {{ opacity: 1, top: 0 }}
            transition={{ duration: 0.3, delay: .2, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
          >
            <button onClick={() => createToast()} className="w-full md:w-auto button buttonLg buttonPrimary">Copy email address</button>
            <span className={`text-sm mt-4 md:mt-0 ml-0 md:ml-4`}>
              pa********@gmail.com
            </span>
          </motion.div>
      </motion.article>
    </section>
  )
}

export default CTA