import { Misc, Role, Title } from "./components"

export const Experience = ({ data }) => {
  return(
    <section className="col-span-1 md:col-span-2">
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
    <section className="col-span-1 md:col-span-2">
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
    <section className="col-span-1 md:col-span-2">
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

export const TagSection = ({title, data}) => {
  return(
    <section className="mb-8">
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