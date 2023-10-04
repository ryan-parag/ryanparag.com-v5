import ProjectCarousel from "../ProjectCarousel"
import Image from "next/image"
import Logo from "../Logo"
import { motion } from "framer-motion"

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

const Container = ({ children }) => {
  return(
    <div className="py-8 px-4">
      {children}
    </div>
  )
}

export const TrustLayer = () => {
  return(
    <Container>
      <ProjectCarousel
        company={'trustlayer'}
        color={'#1C66DC'}
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
          role="Senior Product Designer"
          start="2021"
          end="Present"
        />
        <p>Insurance is really complicated 😩. And virtually every business has had to deal with the frustration of proving they have coverage and are compliant. At TrustLayer, I help design, problem-solve, and ship solutions that help businesses and enterprises automate their insurance compliance process.</p>
      </motion.div>
    </Container>
  )
}

export const Masonite = () => {
  return(
    <Container>
      <ProjectCarousel
        company={'masonite'}
        color={'#99C221'}
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

export const Chargebacks911 = () => {
  return(
    <Container>
      <ProjectCarousel
        company={'chargebacks911'}
        color={'#FA0000'}
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

export const SideProjects = () => {

  const projects = [
    {
      link: 'https://donuts.ryanparag.com/',
      title: 'Donut Drums',
      description: 'A simple, tappable drum kit - an homage to the great J Dilla',
      logo: 'donuts-logo.svg',
    }, {
      link: 'https://slack-themes.vercel.app',
      title: 'Slack Themes',
      description: 'Having trouble keeping track of all of your Slack workspaces?',
      logo: 'slack-themes-logo.svg',
    }, {
      link: 'https://tampabay.design',
      title: 'TampaBay.design',
      description: 'How to get involved in one of the many local design communities',
      logo: 'tampa-bay-designers-logo.svg',
    }, {
      link: 'https://race-times.vercel.app/',
      title: 'Race Times',
      description: 'A directory of translated race times schedules and leaderboards',
      logo: 'race-times-logo.svg',
    }
  ]

  return(
    <Container>
      <div className="section px-0 pt-4 md:pt-0">
        <Header
          title="Side Projects"
          description="A selection of side projects I'm tinkering through."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-4">
          {
            projects.map((project, i) => (
              <motion.div
                className="flex flex-row md:flex-col items-start p-4 rounded-xl bg-themeSurfaceVariant text-themeOnSurfaceVariant relative opacity-0 top-8" key={i}
                initial={{ opacity: 0 }}
                whileInView= {{ opacity: 1, top: 0 }}
                transition={{ duration: 0.3, delay: .1 + .1*i, type: "spring", stiffness: 80 }}
                viewport={{ once: true }}
              >
                <div className="h-10 w-10 md:h-12 md:w-12 relative mb-2">
                  <Image alt={project.title} src={`/projects/${project.logo}`} layout="fill"/>
                </div>
                <div className="inline-block md:hidden h-10 w-px bg-themeOutline mx-3"/>
                <div className="flex-1 w-full flex items-start flex-col">
                  <h5 className="text-lg">{project.title}</h5>
                  <span className="text-sm mt-1 mb-3">{project.description}</span>
                  <a href={project.link} target="_blank" className="text-link--icon">View Project</a>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </Container>
  )
}