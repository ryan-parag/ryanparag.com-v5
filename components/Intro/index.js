import Randomizer from "../Randomizer"
import Image from "next/image"

const Intro = () => {
  return(
    <div className={'w-full max-w-2xl mx-auto pt-40 px-4'}>
      <div className="bg-themeSurfaceVariant h-24 w-24 p-1 rounded-full relative inline-flex items-center justify-center mb-4">
        <div className="bg-themeSurface h-full w-full p-1 rounded-full relative inline-flex items-center justify-center">
          <div className="relative rounded-full w-full h-full overflow-hidden">
            <Image src="/avatar.png" layout="fill" alt="Ryan's face"/>
          </div>
        </div>
      </div>
      <h1 className="text-4xl lg:text-5xl mb-2 md:mb-4">Hello, I&apos;m Ryan.👋</h1>
      <p className="text-base sm:text-lg lg:text-2xl leading-loose mb-8">I&apos;m a product designer and <Randomizer/>.</p>
      <button className="button buttonLg buttonPrimary">More Info</button>
      <div className="h-px bg-themeOutline w-20 my-16"/>
    </div>
  )
}

export default Intro