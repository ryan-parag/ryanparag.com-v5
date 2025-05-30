import Link from "next/link"
import Image from "next/image"

export const Header = () => {
  return(
    <div className="w-full flex flex-col absolute z-10 top-0 left-0 right-0">
      <div className="flex w-full max-w-7xl mx-auto items-center px-4 py-4 justify-center md:justify-start">
        <span className="mx-1">Back to</span>
        <Link href="/">
          <span className="inline-flex items-center link-shadow mx-1">
            Work
          </span>
        </Link>
        <span className="mx-1">or</span>
        <Link href="/about">
          <span className="inline-flex items-center link-shadow mx-1">
            About
          </span>
        </Link>
      </div>
    </div>
  )
}

export const Title = ({ children, flat }) => {
  return(
    <h3 className={`text-base spatial ${flat ? 'mb-0' : 'mb-6'}`}>{children}</h3>
  )
}

export const Role = ({ company }) => {
  return(
    <li className="mb-12 block">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="hidden md:inline-block rounded-md h-8 w-8 mr-3 shadow relative overflow-hidden border border-black border-opacity-10 dark:border-white dark:border-opacity-10">
            <Image src={`/projects/${company.company.replace(/\s+/g, '-').toLowerCase()}.png`} layout="fill"/>
          </div>
          <h4 className="text-themePrimary">{company.company}</h4>
          <span className="mx-2 text-secondary">/</span>
          <span className="spatial text-xs">{company.role}</span>
        </div>
        <span className={`hidden md:block mx-4 mt-1 h-1 border-t border-current text-themeOnSurfaceVariant border-dashed opacity-30 w-full block flex-1`}/>
        <span className="mt-2 md:mt-0 text-xs spatial">{company.start} - {company.end}</span>
      </div>
      <p>{company.description}</p>
    </li>
  )
}

export const Misc = ({ item }) => {
  return(
    <li className="mb-12 block">
      <div className="flex items-center mb-3">
        <div className="flex flex-1 items-center">
          <h4 className="text-themePrimary">{item.title}</h4>
        </div>
      </div>
      <p className="text-secondary">
        <strong>{item.description}</strong> ({item.date})
      </p>
    </li>
  )
}