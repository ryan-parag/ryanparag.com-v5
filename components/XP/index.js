import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const XPItem = ({ company, role, time, current, divider, img, href, color, logo, secondary }) => {

  return(
    <div className="flex flex-col w-full gap-0">
      <a
        style={{ '--company-color': color }}
        className={`transition flex w-full items-start lg:items-center py-3 lg:py-4 px-4 bg-transparent group relative overflow-hidden`}
        href={href} target="_blank" rel="noopener noreferrer"
      >
        <div className="absolute top-0.5 right-0.5 opacity-0 group-hover:opacity-50 transition w-4 h-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z"/></svg>
        </div>
        <div className="transition delay-50 absolute top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-20 bg-[var(--company-color)]"/>
        <div className="relative mt-1 lg:mt-0 h-6 w-6 mr-2 rounded-md overflow-hidden transition opacity-70 group-hover:opacity-100 border border-white/10 dark:border-black/10">
          <Image src={logo} alt={`${company} logo`} fill className="object-contain"/>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 w-full flex-1 items-start lg:items-center">
          <strong className="inline-flex items-center gap-1">
            <span className="font-bold group-hover:underline">{company}</span>
            {secondary && <span className="text-xs rounded-md py-0.5 px-1.5 bg-themeSurfaceVariant">{secondary}</span>
            }
          </strong>
          <div className="text-sm text-themeOutline">{role}</div>
        </div>
        <div className={`${current ? 'font-bold text-themeOnSurface' : 'text-themeOutline'} text-sm`}>
          {time}
        </div>
      </a>
      {
        divider && <div className="h-px bg-themeOutlineVariant w-full"/>
      }
    </div>
  )
}

const roles = [
  {
    company: 'Owens Corning',
    href:"https://owenscorning.com",
    role: 'Design Lead',
    time: '2024 - Current',
    current: true,
    secondary: false,
    img: '/projects/preview-oc.png',
    description: 'sup fool',
    divider: true,
    color: "#D40F7D",
    logo: '/projects/owens-corning.png'
  }, {
    company: 'TrustLayer',
    href:"https://trustlayer.io",
    role: 'Founding Designer',
    time: '2021 - 2024',
    current: false,
    secondary: false,
    img: '/projects/preview-tl.png',
    description: 'sup fool',
    divider: true,
    color: "#1c66dc",
    logo: '/projects/trustlayer.png'
  }, {
    company: 'Masonite',
    href:"https://masonite.com",
    role: 'Senior Product Designer',
    time: '2019 - 2021',
    current: false,
    secondary: "Acquired",
    img: '/projects/preview-masonite.png',
    description: 'sup fool',
    divider: true,
    color: "#99cc00",
    logo: '/projects/masonite.png'
  }, {
    company: 'Chargebacks911',
    href:"https://chargebacks911.com",
    role: 'Product Designer',
    time: '2016 - 2019',
    current: false,
    secondary: false,
    img: '/projects/preview-cb911.png',
    description: 'sup fool',
    divider: true,
    color: "#C80000",
    logo: '/projects/chargebacks911.png'
  }
]

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
        <article className="rounded-xl border border-themeOutlineVariant overflow-hidden">
          {
            roles.map((item,i) => (
              <XPItem
                key={i}
                company={item.company}
                role={item.role}
                time={item.time}
                current={item.current}
                divider={item.divider}
                href={item.href}
                img={item.img}
                description={item.description}
                color={item.color}
                logo={item.logo}
                secondary={item.secondary}
              />
            ))
          }
          <div className="px-4 py-4">
            <Link href="/resume">
              <span className="button w-full md:w-auto">
                <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M360-240h240q17 0 28.5-11.5T640-280q0-17-11.5-28.5T600-320H360q-17 0-28.5 11.5T320-280q0 17 11.5 28.5T360-240Zm0-160h240q17 0 28.5-11.5T640-440q0-17-11.5-28.5T600-480H360q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160Z"/></svg>
                View experience
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