import ProjectCarousel from "../ProjectCarousel"
import Image from "next/image"

const Position = ({ role, start, end }) => {
  return(
    <div className="w-full flex items-center text-xs my-6 text-themeOnSurfaceVariant spatial">
      <strong>{role}</strong>
      <span className="mt-1 h-1 border-t border-current border-dashed w-full block flex-1 text-themeOnSurfaceVariant opacity-30 mx-3"/>
      <span>{start} - {end}</span>
    </div>
  )
}

const Header = ({ image, title, description}) => {
  return(
    <div className="flex flex-col md:flex-row w-full items-start md:items-center">
      <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-current text-themeSurfaceVariant mb-4 md:mb-0">
        <Image alt={image} src={`/projects/${image}.png`} layout="fill"/>
      </div>
      <div className="hidden md:inline-block h-10 w-px bg-themeSurfaceVariant mx-4"/>
      <div>
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
      <div className="w-full mx-auto max-w-2xl">
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
      </div>
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
      <div className="w-full mx-auto max-w-2xl">
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
      </div>
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
      <div className="w-full mx-auto max-w-2xl">
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
      </div>
    </Container>
  )
}