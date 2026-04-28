import ProjectCarousel from "../ProjectCarousel"
import Image from "next/image"
import Logo from "../Logo"
import { motion } from "framer-motion"
import PreviewLink from "@/components/PreviewLink"
import Link from "next/link"
import { sideProjects } from "@/data/sideProjects"

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
            <Image alt={image} src={`/projects/${image}.png`} layout="fill"/>
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

const Container = ({ children, id }) => {
  return(
    <div id={id} className="py-8 px-4">
      {children}
    </div>
  )
}

export const TrustLayer = ({ darkMode }) => {
  return(
    <Container id={'trustlayer'}>
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
    <Container id={'owens-corning'}>
      <ProjectCarousel
        company={'owens corning'}
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
          description="Automating insurance verification and simplifying compliance"
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
    <Container id={'masonite'}>
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
    <Container id={'chargebacks911'}>
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

export const SideProject = ({ slug, title, description, logo, delay, img}) => {
  return(
    <motion.div
      className="relative opacity-0 top-8 w-full"
      initial={{ opacity: 0, rotate: '2deg' }}
      whileInView= {{ opacity: 1, top: 0, rotate: 0 }}
      transition={{ duration: 0.3, delay: .1 + .1*delay, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${slug}`} className="mt-auto">
        <div className="w-full flex flex-col gap-2 p-3 rounded-lg bg-themeSurface group relative overflow-hidden border border-themeOutlineVariant">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-themeSurfaceVariant opacity-0 group-hover:opacity-40 transition z-0"/>
          <div className="h-8 w-8 overflow-hidden rounded-lg relative">
            <Image alt={title} src={`/projects/${logo}`} layout="fill"/>
          </div>
          <strong className="text-base font-bold">{title}</strong>
          
            <span className="text-sm text-themePrimary">
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
      <div className="section px-0 pt-4 md:pt-0">
        <Header
          title="Playground"
          description="A selection of side projects I'm tinkering through."
        />
      </div>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 my-6 gap-4">
        {
          sideProjects.map((project, i) => (
            <SideProject
              key={i}
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