import ProjectCarousel from "../ProjectCarousel"
import Image from "next/image"
import Logo from "../Logo"
import { motion } from "framer-motion"
import Link from "next/link"
import { sideProjects } from "@/data/sideProjects"
import BrowserVideo from '@/components/BrowserVideo'
import MobileVideo from '@/components/MobileVideo'

const Position = ({ role, start, end }) => {
  return(
    <motion.div className="w-full flex items-center text-xs my-6 text-themeOnSurfaceVariant spatial">
      <strong>{role}</strong>
      <motion.span
        className="mt-1 h-1 border-t border-current border-dashed w-full block flex-1 text-themeOnSurfaceVariant mx-3"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: .3 }}
        transition={{ duration: 0.3, delay: .3, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      />
      <span>{start} - {end}</span>
    </motion.div>
  )
}

const Header = ({ image, title, description}) => {
  return(
    <div className="flex w-full items-start md:items-center">
      <motion.div
        className="relative h-12 w-12 overflow-hidden rounded-xl"
        initial={{ opacity: 0, left: '-16px', rotate: '6deg' }}
        whileInView= {{ opacity: 1, left: 0, rotate: 0 }}
        transition={{ duration: 0.3, delay: .3, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      >
        {
          image ? (
            <Image alt={image} src={`/projects/${image}.png`} fill/>
          )
          :
          (
            <Logo/>
          )
        }
      </motion.div>
      <div className="h-10 w-px bg-themeSurfaceVariant mx-4"/>
      <div className="flex-1">
        <h3 className="text-2xl mb-0">{title}</h3>
        <span className="text-sm text-themeOnSurfaceVariant">{description}</span>
      </div>
    </div>
  )
}

const Container = ({ children, id, padding }) => {
  return(
    <div id={id} className={`overflow-x-hidden scrollbar-hidden py-8 ${padding ? 'px-4' : 'px-0'}`}>
      {children}
    </div>
  )
}

export const TrustLayer = ({ darkMode }) => {
  return(
    <Container id={'trustlayer'} padding>
      <ProjectCarousel
        company={'trustlayer'}
        color={'#1C66DC'}
        darkMode={darkMode}
      />
      <motion.div
        className="section px-0 pt-4 md:pt-0 relative top-8"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.3, delay: .1, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <Header
          image="trustlayer"
          title="TrustLayer"
          description="Automating insurance verification and simplifying compliance"
        />
        <Position
          role="Founding Designer"
          start="2021"
          end="2024"
        />
        <p>Insurance is really complicated 😩. And virtually every business has had to deal with the frustration of proving they have coverage and are compliant. At TrustLayer, I help design, problem-solve, and ship solutions that help businesses and enterprises automate their insurance compliance process.</p>
      </motion.div>
    </Container>
  )
}

export const OwensCorning = ({ darkMode }) => {
  return(
    <Container id={'owens-corning'} padding>
      <ProjectCarousel
        company={'owens_corning'}
        color={'#D40f7D'}
        darkMode={darkMode}
      />
      <motion.div
        className="section px-0 pt-4 md:pt-0 relative top-8"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.3, delay: .1, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <Header
          image="owens-corning"
          title="Owens Corning"
          description="Test"
        />
        <Position
          role="Design Lead"
          start="2024"
          end="Present"
        />
        <p>Test</p>
      </motion.div>
    </Container>
  )
}

export const Masonite = ({ darkMode }) => {
  return(
    <Container id={'masonite'} padding>
      <ProjectCarousel
        company={'masonite'}
        color={'#99C221'}
        darkMode={darkMode}
      />
      <motion.div
        className="section px-0 pt-4 md:pt-0 relative top-8"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.3, delay: .1, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <Header
          image="masonite"
          title="Masonite"
          description="Connecting doors to the cloud and simplifying home-remodeling"
        />
        <Position
          role="Senior Product Designer"
          start="2020"
          end="2021"
        />
        <Position
          role="Product Designer"
          start="2019"
          end="2020"
        />
        <p>Masonite is in the business of manufacturing and selling doors – whether B2B to retailers like The Home Depot and Lowe&apos;s or B2C for newer, consumer-focused business units.</p>
        <p>At Masonite, I helped build cross-platform design systems and products for 0-to-1 core experiences, native mobile, and growth - focusing on establishing a process of lean user research and working directly with software engineers, product management, and other stakeholders.</p>
      </motion.div>
    </Container>
  )
}

export const Chargebacks911 = ({ darkMode }) => {
  return(
    <Container id={'chargebacks911'} padding>
      <ProjectCarousel
        company={'chargebacks911'}
        color={'#FA0000'}
        darkMode={darkMode}
      />
      <motion.div
        className="section px-0 pt-4 md:pt-0 relative top-8"
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1, top: 0 }}
        transition={{ duration: 0.3, delay: .1, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <Header
          image="chargebacks911"
          title="Chargebacks911"
          description="Helping merchants and banks intelligently manage payment disputes"
        />
        <Position
          role="Product Designer"
          start="2016"
          end="2019"
        />
        <p>Chargebacks911® provides solutions for businesses dealing with falsely protested credit card charges by intelligently managing payment disputes. I was hired as the first designer on Chargebacks911&apos;s product team, juggling between a role as the designer on the marketing team and the sole designer on our application development team (30+ developers).</p>
      </motion.div>
    </Container>
  )
}

export const SideProject = ({ sideProject, slug, title, description, logo, delay, img}) => {
  return(
    <motion.div
      className="relative opacity-0 top-8 w-auto shrink-0"
      initial={{ opacity: 0 }}
      whileInView= {{ opacity: 1, top: 0 }}
      transition={{ duration: 0.3, delay: .1, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${slug}`} className="mt-auto inline-flex w-auto" aria-label={`View ${title} project`}>
        <div className="w-96 shrink-0 h-[520px] overflow-y-hidden flex flex-col gap-2 px-6 pt-6 rounded-2xl bg-themeSurface group relative overflow-hidden border border-themeOutlineVariant">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-themeSurfaceVariant opacity-0 group-hover:opacity-40 transition z-0"/>
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 blur-3xl z-0 w-80 h-80 opacity-20">
            <Image alt={title} src={`/projects/${logo}`} fill/>
          </div>
          <div className="transition h-10 w-10 overflow-hidden rounded-xl shadow border border-black/5 relative">
            <Image alt={title} src={`/projects/${logo}`} fill/>
          </div>
          <div className="flex flex-col w-full">
            <strong className="text-xl font-bold">{title}</strong>
            <span className="text-sm text-themeOnSurfaceVariant">{description}</span>
          </div>
          <div className="transition delay-50 duration-150 absolute z-0 bottom-0 left-4 right-4 h-96 translate-y-8 scale-[98%] group-hover:scale-100 w-full overflow-hidden group-hover:translate-y-0">
            {
              sideProject?.videos && (
                sideProject.videos.length > 0 && sideProject.videos[0].format === 'browser' ? (
                  <div className="translate-x-6 w-[720px] h-[400px] relative">
                    <BrowserVideo muxId={sideProject.videos[0].src} thumbnail={sideProject.thumbnail?.src} url={sideProject.link} />
                  </div>
                ) : sideProject.videos[0].format === 'mobile' ? (
                  <MobileVideo muxId={sideProject.videos[0].src} thumbnail={sideProject.thumbnail?.src} />
                ) : null
              )
            }
          </div>
          {
            !sideProject.videos && (
              <div className="transition absolute z-10 left-1/2 -translate-x-1/2 -bottom-8 w-80 rounded-2xl bg-themeSurfaceVariant py-12 text-center text-sm flex flex-col items-center justify-start gap-2 h-96 opacity-60 group-hover:opacity-100 translate-y-48 group-hover:translate-y-36 shadow-none group-hover:shadow-xl">
                <div className="transition h-10 w-10 inline-flex rounded-xl bg-themeSurface p-2 relative translate-y-0 group-hover:-translate-y-16 group-hover:h-16 group-hover:w-16 group-hover:-rotate-6 border border-themeOutlineVariant">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="176" y1="16" x2="176" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="224" y1="72" x2="224" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="152" y1="40" x2="200" y2="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="208" y1="88" x2="240" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                </div>
                <span className="relative transition translate-y-0 group-hover:-translate-y-16">Coming soon...</span>
              </div>
            )
          }
          <span className="transition delay-100 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 button buttonPrimary w-auto absolute z-10 bottom-4 right-4 shadow-lg">
            View Project
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export const SideProjects = () => {
  return(
    <Container id={'ryan-side-projects'}>
      <div className="section px-4 md:px-0 pt-4 md:pt-0">
        <Header
          title="Playground"
          description="A selection of side projects I'm tinkering through."
        />
      </div>
      <div className={`w-auto py-8 px-4 md:px-40 overflow-x-scroll overflow-y-hidden scrollbar-hidden mx-auto flex items-start gap-4`}>
        {
          sideProjects.map((project, i) => (
            <SideProject
              key={i}
              sideProject={project}
              slug={project.slug}
              title={project.title}
              description={project.description}
              logo={project.logo}
              img={project.images[0]?.src}
              delay={i}
            />
          ))
        }
      </div>
    </Container>
  )
}