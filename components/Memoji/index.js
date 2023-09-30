import React, { useState, useEffect } from 'react'
import Image from 'next/image'


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
      <button className="transition transform relative my-6 bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10 p-1 rounded-full hover:scale-105 hover:-rotate-6" onClick={() => setIsRandom(memojiRandom())}>
        <div className="relative rounded-full h-24 w-24 md:h-32 md:w-32 z-10">
          <Image layout="fill" alt="Ryan's memoji face" src={`/memoji/${isRandom}`}/>
        </div>
        <div className="rounded-full absolute h-24 w-24 md:h-32 md:w-32 blur-xl opacity-30 bg-themePrimary top-0 bottom-0 left-0 right-0 z-0"/>
      </button>
      <div className="absolute w-8 h-8 bg-themePrimary top-0 -right-4 rounded-full opacity-50"/>
      <div className="absolute w-4 h-4 bg-themeTertiary top-12 -right-6 rounded-full opacity-50"/>
    </div>
  )
}

export default Memoji