import { motion } from "framer-motion";
import Link from "next/link";

const NavItem = ({ label, icon }) => {
  return(
    <div className="transition transform rounded-xl p-2 flex items-center justify-center bg-themeSurface text-themeOnSurfaceVariant hover:scale-125 hover:shadow-lg">
      {icon}
    </div>
  )
}

const NavLink = ({ label, icon, href }) => {
  return(
    <Link href={href}>
      <NavItem label={label} icon={icon}/>
    </Link>
  )
}

const NavOutbound = ({ label, icon, href }) => {
  return(
    <a href={href}>
      <NavItem label={label} icon={icon}/>
    </a>
  )
}

const Navigation = () => {

  return(
    <motion.div
      className="grid grid-cols-3 lg:grid-cols-1 gap-2 fixed bottom-6 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:bottom-auto lg:left-6 rounded-2xl bg-themeSurfaceVariant shadow-2xl z-20 lg:top-1/2 lg:-translate-y-1/2 p-2 border dark:border-transparent border-current text-themeBackground opacity-0"
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: 0.5, type: "spring", stiffness: 150 }}
    >
      <NavLink
        label={'Home'}
        icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H600q-17 0-28.5-11.5T560-160v-200q0-17-11.5-28.5T520-400h-80q-17 0-28.5 11.5T400-360v200q0 17-11.5 28.5T360-120H240q-33 0-56.5-23.5T160-200Z"/></svg>}
        href={'/'}
      />
      <NavLink
        label={'About'}
        icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Z"/></svg>}
        href={'/about'}
      />
      <NavOutbound
        label={'Email'}
        icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-287q5 0 10.5-1.5T501-453l283-177q8-5 12-12.5t4-16.5q0-20-17-30t-35 1L480-520 212-688q-18-11-35-.5T160-659q0 10 4 17.5t12 11.5l283 177q5 3 10.5 4.5T480-447Z"/></svg>}
        href={'mailto:parag.ryan@gmail.com'}
      />
    </motion.div>
  )
}

export default Navigation