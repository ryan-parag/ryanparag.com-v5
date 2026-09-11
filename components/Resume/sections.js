import { Misc, Role, Title, Subtitle } from "./components"
import Link from "next/link"
import ProjectGallery from "../ProjectGallery"
import BrowserVideo from "../BrowserVideo"
import MobileVideo from "../MobileVideo"
import HoverCard from "../HoverCard"

const workGalleryImages = [
  { src: "/projects/trustlayer/5.png" },
  { src: "/projects/trustlayer/6.png" },
  { src: "/projects/masonite/2.png" },
  { src: "/projects/scorekeeper/2.png" },
  { src: "/projects/cbd/1.png" },
  { src: "/projects/tbd/1.png" },
]

const hoverCardItems = [
  { src: "/projects/trustlayer/5.png", title: "TrustLayer", tagline: "An easy-to-use visual workflow builder to automate repetitive workflows", logo: '/projects/trustlayer.png' },
  { src: "/projects/trustlayer/6.png", title: "TrustLayer", tagline: "A white-labeled experience for insurance carriers/brokers to provide their customers a way to view and share their insurance information", logo: '/projects/trustlayer.png' },
  { src: "/projects/masonite/2.png", title: "Masonite", tagline: "A design system to help bridge our visual language across many web, mobile, and print", logo: '/projects/masonite.png' },
  { src: "/projects/scorekeeper/2.png", title: "ScoreKeeper", tagline: "A simple way to track game scores with friends", logo: '/projects/scorekeeper-logo.svg' },
  { src: "/projects/cbd/1.png", title: "Cutting Board Designer", tagline: "Design custom cutting boards with precision", logo: '/projects/cbd-logo.svg' },
  { src: "/projects/tbd/1.png", title: "Tampa Bay Designers", tagline: "How to get involved in one of the many local design communities", logo: '/projects/tampa-bay-designers-logo.svg' },
]

export const About = ({stackStyle}) => {
  return(
    <section id="about" className={`col-span-1 md:col-span-2 mb-8`}>
      <div className={stackStyle}>
        <Title>About</Title>
        <p>
          I&apos;m a product designer with a penchant for code, based in <strong>Tampa, FL 🌴</strong>. Currently, I lead the direct customer experience and design systems at <a href="https://owenscorning.com" target="_blank" rel="noopener noreferrer" className="text-link--icon">Owens Corning</a>.
        </p>
        <Subtitle>In my spare time...</Subtitle>
        <ul className="mb-4 list-disc list-outside pl-4">
          <li>Building <Link href="/projects/scorekeeper"><span className="link-shadow transform active:scale-95 inline-flex items-center">ScoreKeeper</span></Link> - a simple way to track game scores with friends</li>
          <li>Crafting things as an amateur <Link href="/projects/cutting-board-designer"><span className="link-shadow transform active:scale-95 inline-flex items-center">woodworker</span></Link></li>
          <li>Cooking and <Link href="/projects/vanilla-extract-calculator"><span className="link-shadow transform active:scale-95 inline-flex items-center">baking</span></Link> my way through <Link href="/projects/buy-fresh-florida"><span className="link-shadow transform active:scale-95 inline-flex items-center">different ingredients</span></Link></li>
        </ul>
        <Subtitle>Snippets of work</Subtitle>
      </div>
      <div className="py-4">
        <ProjectGallery images={hoverCardItems} columns={3} />
      </div>
      <div className={stackStyle}>
        <Link href="/">
          <span className="button">
            View More Work
          </span>
        </Link>
      </div>
    </section>
  )
}

export const Experience = ({ data }) => {
  return(
    <section id="experience" className="col-span-1">
      <Title>Experience</Title>
      <ul className="pl-4 border-l border-themeOutlineVariant">
        {
          data.map((company,i) => (
            <Role company={company} key={i}/>
          ))
        }
      </ul>
    </section>
  )
}

export const Education = ({ data }) => {
  return(
    <section id="education" className="col-span-1">
      <Title>Education</Title>
      <ul className="pl-4 border-l border-themeOutlineVariant">
        {
          data.map((item,i) => (
            <Misc primary={item.institution} secondary={item.degree} date={item.date} key={i}/>
          ))
        }
      </ul>
    </section>
  )
}

export const Certifications = ({ data }) => {
  return(
    <section id="certifications" className="col-span-1">
      <Title>Certifications</Title>
      <ul className="pl-4 border-l border-themeOutlineVariant">
        {
          data.map((item,i) => (
            <Misc primary={item.issuer} secondary={item.title} date={item.date} key={i}/>
          ))
        }
      </ul>
    </section>
  )
}

const TagGroup = ({ items }) => (
  <ul className="self-start flex flex-wrap gap-2 pl-4 border-l border-themeOutlineVariant">
    {
      items.map((item,i) => (
        <li className="rounded-md inline-flex px-1.5 py-0.5 text-sm bg-black/5 dark:bg-white/5 border border-themeOutlineVariant text-themeOnSurfaceVariant" key={i}>{item}</li>
      ))
    }
  </ul>
)

export const TagSection = ({title, data, id}) => {
  return(
    <section id={id} className="mb-8">
      <Title>{title}</Title>
      {
        Array.isArray(data) ? (
          <TagGroup items={data}/>
        ) : (
          Object.entries(data).map(([label, items], i) => (
            <div key={label} className={i > 0 ? 'mt-4' : ''}>
              <Subtitle>{label.charAt(0).toUpperCase() + label.slice(1)}</Subtitle>
              <TagGroup items={items}/>
            </div>
          ))
        )
      }
    </section>
  )
}