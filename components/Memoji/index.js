import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tooltip } from 'radix-ui';

const Memoji = () => {

  const memojis = [
    'memoji-thanks.png',
    'memoji-nervous.png',
    'memoji-peace.png',
    'memoji-shocked.png',
    'memoji-sleep.png',
    'memoji-stars.png',
    'memoji-surprise.png',
    'memoji-thinking.png',
    'memoji-eyeroll.png'
  ]

  const memojiRandom = () => {
    let random = memojis[Math.floor(Math.random() * memojis.length)]
    return random
  }

  const [isRandom, setIsRandom] = useState('memoji-thanks.png')

  useEffect(() => {
    setIsRandom(memojiRandom())
  }, [])

  return(
    <div className="relative inline-flex">
      <Tooltip.Provider delayDuration="100">
			  <Tooltip.Root>
				  <Tooltip.Trigger asChild>
            <motion.button
              className="transition transform relative my-6 bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10 p-1 rounded-full hover:scale-105 hover:-rotate-6 active:scale-95 active:rotate-3 opacity-0 top-8"
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.1, delay: 0.3, type: "spring", stiffness: 150 }}
              onClick={() => setIsRandom(memojiRandom())}
            >
              <motion.div
                className="relative transform rounded-full h-24 w-24 md:h-32 md:w-32 z-10"
              >
                <Image layout="fill" alt="Ryan's memoji face" src={`/memoji/${isRandom}`}/>
              </motion.div>
              <motion.div
                className="rounded-full absolute h-24 w-24 md:h-32 md:w-32 blur-xl bg-themePrimary top-0 bottom-0 left-0 right-0 z-0 opacity-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              />
            </motion.button>
          </Tooltip.Trigger>
				  <Tooltip.Portal>
					  <Tooltip.Content className="shadow-xl z-20 bg-themeSurfaceVariant text-sm p-2 rounded-lg" side={'right'} sideOffset={0} aria-label={'Change Memoji'}>
						  Change Memoji
						  <Tooltip.Arrow className="text-themeSurfaceVariant fill-current" />
					  </Tooltip.Content>
				  </Tooltip.Portal>
			  </Tooltip.Root>
		  </Tooltip.Provider>
      <motion.div
        className="transform absolute w-8 h-8 bg-themePrimary top-8 right-8 rounded-full opacity-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1, opacity: 0.5, top: 0, right: '-16px' }}
        transition={{ duration: 0.24, delay: 0.6, type: "spring", stiffness: 150 }}
      />
      <motion.div
        className="absolute w-4 h-4 bg-themeTertiary top-12 right-12 rounded-full opacity-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1, opacity: 0.5, top: '48px', right: '-24px' }}
        transition={{ duration: 0.24, delay: 0.7, type: "spring", stiffness: 150 }}
      />
    </div>
  )
}

export default Memoji