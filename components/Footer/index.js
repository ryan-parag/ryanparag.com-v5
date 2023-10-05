import Logo from '../Logo';
import { motion } from 'framer-motion';
import { build } from '../Colophon';
import Link from 'next/link';

const Badge = () => {
  return(
    <Link href="/">
      <motion.div
        className="inline-flex items-center relative top-8 transition hover:scale-105"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.1, delay: .2, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-10 w-10 mr-3 transform relative -left-3"
          initial={{ opacity: 0 }}
          whileInView= {{ opacity: 1, left: 0 }}
          transition={{ duration: 0.2, delay: .4, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
        >
          <Logo subtle/>
          <motion.span
            className="absolute top-0 bottom-0 right-0 left-0 bg-themePrimary blur-lg opacity-50 -z-10"
            initial={{ opacity: 0, scale: 0 }}
            whileInView= {{ opacity: .5, scale: 1 }}
            transition={{ duration: 0.2, delay: .4, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
          />
        </motion.div>
        <div className="flex flex-col items-start">
          <span className="font-bold text-base">Ryan Parag</span>
          <span className="text-sm opacity-70">Product Designer</span>
        </div>
      </motion.div>
    </Link>
  )
}

const Footer = () => {
  const links = [
    {
      name: 'About',
      href: '/about',
      icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"></path>
    </svg>
    ,
      outbound: false
    }, {
      name: 'Resumé',
      href: '/resume',
      icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9.25H13.75V5"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 15.25H14.25"></path>
        <path stroke="currentColor" stroke-Linecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 12.25H14.25"></path>
      </svg>
    ,
      outbound: false
    }, {
      name: 'Email',
      href: 'mailto:parag.ryan@gmail.com',
      icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"></path>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 6.5L12 12.25L18.5 6.5"></path></svg>,
      outbound: true
    },{
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ryan-parag',
      icon: <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
      outbound: true
    }, {
      name: 'Dribbble',
      href: 'https://dribbble.com/ryanparag',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12,.89a11,11,0,1,0,11,11A11,11,0,0,0,12,.89ZM19.29,6a9.38,9.38,0,0,1,2.13,5.87,22.42,22.42,0,0,0-6.56-.3c-.07-.15-.13-.32-.2-.49-.19-.45-.41-.92-.62-1.36A12.55,12.55,0,0,0,19.29,6ZM12,2.52a9.4,9.4,0,0,1,6.25,2.37A10.69,10.69,0,0,1,13.31,8.3,48.91,48.91,0,0,0,9.78,2.78,9.5,9.5,0,0,1,12,2.52ZM8,3.41a60.44,60.44,0,0,1,3.5,5.45A35.6,35.6,0,0,1,2.77,10,9.47,9.47,0,0,1,8,3.41ZM2.56,12v-.29a34.62,34.62,0,0,0,9.69-1.34c.28.53.53,1.07.77,1.6l-.37.11A15,15,0,0,0,5,18.25,9.46,9.46,0,0,1,2.56,12ZM12,21.37a9.37,9.37,0,0,1-5.78-2,12.9,12.9,0,0,1,7.4-5.9l.06,0a39.39,39.39,0,0,1,2,7.15A9.29,9.29,0,0,1,12,21.37Zm5.26-1.61A41.2,41.2,0,0,0,15.43,13a13.63,13.63,0,0,1,5.86.41A9.33,9.33,0,0,1,17.26,19.76Z"/></svg>,
      outbound: true
    }, {
      name: 'GitHub',
      href: 'https://github.com/ryan-parag',
      icon: <svg width="20" height="20" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/></svg>,
      outbound: true
    }, {
      name: 'Read.cv',
      href: 'https://read.cv/ryanparag',
      icon: <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fillRule="evenodd" clipRule="evenodd" d="M11.737 7.958a.75.75 0 10-.389 1.45l7.245 1.94A.75.75 0 1018.98 9.9l-7.244-1.94zM10.896 11.098a.75.75 0 00-.389 1.448l7.245 1.942a.75.75 0 00.388-1.45l-7.245-1.94zM9.136 14.767a.75.75 0 01.918-.53l4.83 1.294a.75.75 0 01-.388 1.449l-4.83-1.294a.75.75 0 01-.53-.919z"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.5 23.987L6.841 21.4a2.75 2.75 0 01-1.944-3.368L8.132 5.957A2.75 2.75 0 0111.5 4.013L21.16 6.6a2.75 2.75 0 011.944 3.368l-3.236 12.074a2.75 2.75 0 01-3.368 1.944zM6.345 18.42a1.25 1.25 0 00.884 1.531l9.66 2.588a1.25 1.25 0 001.53-.883L21.655 9.58a1.25 1.25 0 00-.884-1.531L11.11 5.46a1.25 1.25 0 00-1.53.884L6.345 18.42z"></path></svg>,
      outbound: true
    }, {
      name: 'CodePen',
      href: 'https://codepen.io/ryanparag',
      icon: <svg viewBox="0 0 100 100" width="20" height="20" fill="currentColor"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path></svg>,
      outbound: true
    }
  ]

  return(
    <div className="flex flex-col">
      <Badge/>
      <motion.div
        className="h-px bg-themeOutline w-20 mt-8 relative top-8"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.1, delay: .2, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="w-full flex-1 relative my-8 top-8"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.1, delay: .2, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <div className="spatial text-sm mb-4">Everywhere else</div>
        <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-2">
          {
            links.map((item,i) => (
              <>
                {
                  item.outbound ? (
                    <div key={i}>
                      <a href={item.href} target="_blank" className="transition text-sm md:text-base inline-flex items-center hover:underline hover:text-themePrimary">
                        <div className="inline-flex mr-2">
                          {
                            item.icon
                          }
                        </div>
                        <span>{item.name}</span>
                      </a>
                    </div>
                  )
                  :
                  (
                    <div key={i}>
                      <Link href={item.href}>
                        <span className="transition text-sm md:text-base inline-flex items-center hover:underline hover:text-themePrimary">
                          <div className="inline-flex mr-2">
                            {
                              item.icon
                            }
                          </div>
                          <span>{item.name}</span>
                        </span>
                      </Link>
                    </div>
                  )
                }
              </>
            ))
          }
        </div>
      </motion.div>
      <motion.div
        className="text-sm"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1 }}
        transition={{ duration: 0.1, delay: .2, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        Built with <a className="transition hover:underline hover:text-themePrimary" href={build.built.link} target="_blank">{build.built.name}</a>, <a className="transition hover:underline hover:text-themePrimary" href={build.style.link} target="_blank">{build.style.name}</a>, and <a className="transition hover:underline hover:text-themePrimary" href={build.animation.link} target="_blank">{build.animation.name}</a>. Website set in <a className="transition hover:underline hover:text-themePrimary" href={build.typography.link} target="_blank">{build.typography.name}</a>.
      </motion.div>
    </div>
  )
}

export default Footer