import { Misc, Role, Title, Subtitle } from "./components"
import Link from "next/link"
import ProjectGallery from "../ProjectGallery"

const workGalleryImages = [
  { src: "/projects/trustlayer/5.png" },
  { src: "/projects/chargebacks911/2.png" },
  { src: "/projects/masonite/2.png" },
  { src: "/projects/scorekeeper/2.png" },
  { src: "/projects/cbd/1.png" },
  { src: "/projects/tbd/1.png" },
]

export const About = () => {
  return(
    <section id="about" className="col-span-1 md:col-span-2 mb-8">
      <Title>About</Title>
      <p>
        I&apos;m a product designer and design engineer living in <strong>Tampa, FL 🌴</strong>.
      </p>
      <Subtitle>Current Role</Subtitle>
      <ul className="mb-4 list-disc list-inside">
        <li>Design lead for Direct Customer experience and Design Systems at <a href="https://owenscorning.com" target="_blank" rel="noopener noreferrer" className="text-link--icon">Owens Corning</a></li>
      </ul>
      <Subtitle>In my spare time...</Subtitle>
      <ul className="mb-4 list-disc list-inside">
        <li>Building <Link href="/projects/scorekeeper"><span className="link-shadow transform active:scale-95 inline-flex items-center">ScoreKeeper</span></Link> - a simple way to track game scores with friends</li>
        <li>Crafting things as an amateur <Link href="/projects/cutting-board-designer"><span className="link-shadow transform active:scale-95 inline-flex items-center">woodworker</span></Link></li>
        <li>Cooking and <Link href="/projects/vanilla-extract-calculator"><span className="link-shadow transform active:scale-95 inline-flex items-center">baking</span></Link> my way through <Link href="/projects/buy-fresh-florida"><span className="link-shadow transform active:scale-95 inline-flex items-center">different ingredients</span></Link></li>
      </ul>
      <Subtitle>Snippets of work</Subtitle>
      <ProjectGallery images={workGalleryImages} columns={3} />
      <Link href="/">
        <span className="button">
          View More Work
        </span>
      </Link>
    </section>
  )
}

export const Experience = ({ data }) => {
  return(
    <section id="experience" className="col-span-1 md:col-span-2">
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
    <section id="education" className="col-span-1 md:col-span-2">
      <Title>Education</Title>
      <ul className="pl-4 border-l border-themeOutlineVariant">
        {
          data.map((item,i) => (
            <Misc item={item} key={i}/>
          ))
        }
      </ul>
    </section>
  )
}

export const Certifications = ({ data }) => {
  return(
    <section id="certifications" className="col-span-1 md:col-span-2">
      <Title>Certifications</Title>
      <ul className="pl-4 border-l border-themeOutlineVariant">
        {
          data.map((item,i) => (
            <Misc item={item} key={i}/>
          ))
        }
      </ul>
    </section>
  )
}

export const TagSection = ({title, data, id}) => {
  return(
    <section id={id} className="mb-8">
      <Title>{title}</Title>
      <ul className="self-start flex flex-wrap gap-2 pl-4 border-l border-themeOutlineVariant">
        {
          data.map((item,i) => (
            <li className="rounded-md inline-flex px-1.5 py-0.5 text-sm bg-gradient-to-t dark:from-white/10 dark:to-transparent border border-themeOutlineVariant text-themeOnSurfaceVariant" key={i}>{item}</li>
          ))
        }
      </ul>
    </section>
  )
}