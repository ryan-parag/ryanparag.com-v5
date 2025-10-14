import React, { useState } from 'react';
import { copyTextToClipboard } from '@/utils/copy';
import { motion } from 'framer-motion';
import { Toast } from '@base-ui-components/react';

const ConnectLink = ({ name, href, icon, type }) => {
  const toastManager = Toast.useToastManager();
    
  const createToast = () => {
    copyTextToClipboard()
    toastManager.add({
      title: `Email Address Copied ✉️`,
      description: 'You copied the email address to your clipboard.',
    });
  }

  if(type === 'email') {
    return(
      <div className="relative">
        <button onClick={() => createToast()} className="transition text-sm md:text-base inline-flex items-center hover:underline hover:text-themePrimary">
          <div className="inline-flex mr-2">
            {
              icon
            }
          </div>
          <span>Email</span>
        </button>
      </div>
    )
  } else {
    return(
      <a href={href} target="_blank" className="transition text-sm md:text-base inline-flex items-center hover:underline hover:text-themePrimary">
        <div className="inline-flex mr-2">
          {
            icon
          }
        </div>
        <span>{name}</span>
      </a>
    )
  }
}

const Connect = () => {

  const links = [
    {
      name: 'Email',
      href: 'mailto:parag.ryan@gmail.com',
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-287q5 0 10.5-1.5T501-453l283-177q8-5 12-12.5t4-16.5q0-20-17-30t-35 1L480-520 212-688q-18-11-35-.5T160-659q0 10 4 17.5t12 11.5l283 177q5 3 10.5 4.5T480-447Z"/></svg>,
      type: 'email'
    },{
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ryan-parag',
      icon: <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
      type: 'outbound'
    }, {
      name: 'GitHub',
      href: 'https://github.com/ryan-parag',
      icon: <svg width="20" height="20" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/></svg>,
      type: 'outbound'
    }
  ]

  return(
    <motion.div
      className="relative"
      initial={{ opacity: 0, top: '24px' }}
      whileInView= {{ opacity: 1, top: 0 }}
      transition={{ duration: 0.1, delay: 0.4, type: "spring", stiffness: 150 }}
    >
      <div className="section">
        <h2 className="spatial text-xl">Connect</h2>
      </div>
      <div className="section mb-6">
        <ul>
          {
            links.map((item,i) => (
              <li key={i} className="py-2">
                <ConnectLink name={item.name} href={item.href} icon={item.icon} type={item.type}/>
              </li>
            ))
          }
        </ul>
        <div className="h-px bg-themeOutline w-20 my-16"/>
      </div>
    </motion.div>
  )
}

export default Connect;