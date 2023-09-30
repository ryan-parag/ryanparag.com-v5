import { Misc, Role, Title } from "./components"

export const Experience = ({ data }) => {
  return(
    <section className="col-span-1 md:col-span-2">
      <Title>Experience</Title>
      <ul>
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
    <section className="col-span-1">
      <Title>Education</Title>
      <ul>
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
    <section className="col-span-1">
      <Title>Certifications</Title>
      <ul>
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
      <ul className="self-start">
        {
          data.map((item,i) => (
            <li className="tag tag--outline mb-2 mr-2" key={i}>{item}</li>
          ))
        }
      </ul>
    </section>
  )
}