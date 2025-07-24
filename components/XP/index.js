import { motion } from "framer-motion";
import Link from "next/link";

const XPItem = ({ company, role, time, current, divider }) => {
  return(
    <>
      <div className="flex w-full items-center py-3 px-4">
        <div className="flex flex-col w-full flex-1">
          <div className="text-base font-bold text-themeOnSurface">{company}</div>
          <div className="text-xs text-themeOutline">{role}</div>
        </div>
        <div className={`${current ? 'bg-themeSurfaceVariant text-themeOnSurfaceVariant' : 'bg-transparent text-themeOnSurfaceVariant'} text-sm rounded-lg py-1 px-2`}>
          {time}
        </div>
      </div>
      {
        divider && <div className="h-px bg-themeOutlineVariant w-full"/>
      }
    </>
  )
}

export const XP = () => {
  return(
    <motion.div
      className="relative"
      initial={{ opacity: 0, top: '24px' }}
      whileInView= {{ opacity: 1, top: 0 }}
      transition={{ duration: 0.1, delay: 0.3, type: "spring", stiffness: 150 }}
    >
      <div className="section">
        <h2 className="spatial text-xl">Experience</h2>
      </div>
      <div className="section mb-6">
        <article className="rounded-xl border border-themeOutlineVariant">
          <XPItem company="Owens Corning" role="Design Lead" time="2024 - Now" current divider/>
          <XPItem company="TrustLayer" role="Founding Designer" time="2021 - 2024" divider/>
          <XPItem company="Masonite" role="Senior Product Designer" time="2019 - 2021" divider/>
          <XPItem company="Chargebacks911" role="Product Designer" time="2016 - 2019" divider/>
          <div className="px-4 py-4">
            <Link href="/resume">
              <span className="button w-full md:w-auto">
                <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M360-240h240q17 0 28.5-11.5T640-280q0-17-11.5-28.5T600-320H360q-17 0-28.5 11.5T320-280q0 17 11.5 28.5T360-240Zm0-160h240q17 0 28.5-11.5T640-440q0-17-11.5-28.5T600-480H360q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160Z"/></svg>
                View more
              </span>
            </Link>
          </div>
        </article>
        <div className="h-px bg-themeOutline w-20 my-16"/>
      </div>
    </motion.div>
  )
}

export default XP;