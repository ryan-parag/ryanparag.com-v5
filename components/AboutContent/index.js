import Link from "next/link"
import Colophon from "../Colophon"
import Memoji from "../Memoji"

const LinkSection = () => {
  return(
    <div className="flex flex-col md:flex-row my-6">
      <a href="https://google.com" className="button w-full md:w-auto mb-3 md:mb-0 md:mr-4">
        <svg fill="currentColor" className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        LinkedIn
      </a>
      <a href="https://google.com" className="button w-full md:w-auto mb-3 md:mb-0 md:mr-4">
        <svg fill="currentColor" className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fillRule="evenodd" clipRule="evenodd" d="M11.737 7.958a.75.75 0 10-.389 1.45l7.245 1.94A.75.75 0 1018.98 9.9l-7.244-1.94zM10.896 11.098a.75.75 0 00-.389 1.448l7.245 1.942a.75.75 0 00.388-1.45l-7.245-1.94zM9.136 14.767a.75.75 0 01.918-.53l4.83 1.294a.75.75 0 01-.388 1.449l-4.83-1.294a.75.75 0 01-.53-.919z"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.5 23.987L6.841 21.4a2.75 2.75 0 01-1.944-3.368L8.132 5.957A2.75 2.75 0 0111.5 4.013L21.16 6.6a2.75 2.75 0 011.944 3.368l-3.236 12.074a2.75 2.75 0 01-3.368 1.944zM6.345 18.42a1.25 1.25 0 00.884 1.531l9.66 2.588a1.25 1.25 0 001.53-.883L21.655 9.58a1.25 1.25 0 00-.884-1.531L11.11 5.46a1.25 1.25 0 00-1.53.884L6.345 18.42z"></path></svg>
        Read.cv
      </a>
      <Link href="/resume">
        <span className="button w-full mb-0 md:w-auto">
          <svg className="mr-1" width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"></path>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9.25H13.75V5"></path>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 15.25H14.25"></path>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 12.25H14.25"></path>
          </svg>
          Resume
        </span>
      </Link>
    </div>
  )
}

const AboutContent = () => {
  return(
    <div className="section">
      <div className="mb-4">
        <Link href="/">
          <span className="inline-flex items-center link-shadow">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.25 8.75L9.75 12L13.25 15.25"></path>
            </svg>
            Back
          </span>
        </Link>
      </div>
      <Memoji/>
      <h1>About</h1>
      <h3 className="spatial text-sm mb-4">Career</h3>
      <p>
        Currently, I&apos;m designing at <a href="https://trustlayer.io" target="_blank" className="text-link--icon">TrustLayer</a>, working on collaborative tools where businesses can share insurance verification and begin working together with less difficulty.
      </p>
      <p>
        Previously, I was on the digital innovation team at <a href="https://residential.masonite.com" target="_blank" className="text-link--icon">Masonite</a> — conceptualizing a simpler home remodeling experience and designing multiple smart-home experiences for homeowners, builders, and internal teams. Before that, I was at <a href="https://chargebacks911.com" target="_blank" className="text-link--icon">Chargebacks911</a> , designing digital tools for fraud-auditing teams at banks.
      </p>
      <LinkSection/>
      <h3 className="spatial text-sm mb-4">Education</h3>
      <p>
        In a previous life, I studied Healthcare Informatics and Biology. After graduating, I crunched the numbers for pricing model forecasts as a healthcare analyst - and in my after hours I cut my teeth designing as a freelancer, for a diverse group of clients <i>(global non-profits, restaurants, pre-seed startups, musicians etc.)</i>.
      </p>
      <h3 className="spatial text-sm mb-4">Misc.</h3>
      <p>
        I thrive in fast-paced, collaborative environments and am committed to being transparent in my work. In my free time, you can find me tinkering on a random project, finding the first window seat on a flight 🛫, biking around town 🚴‍♂️, and more 🎸 🥐 🏎!
      </p>
      <div className="section !px-0">
        <div className="h-px bg-themeOutline w-20 my-12"/>
      </div>
      <Colophon/>
      <div className="section !px-0">
        <div className="h-px bg-themeOutline w-20 my-12"/>
      </div>
    </div>
  )
}

export default AboutContent