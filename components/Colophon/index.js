import { SideProject } from "../Role";
import { sideProjects } from "@/data/sideProjects";
import Link from "next/link";

const Theme = () => {
  const tokens = [
    {
      name: 'Primary',
      values: [
        {
          name: 'Primary',
          variable: 'primary'
        }, {
          name: 'On Primary',
          variable: 'on-primary'
        }, {
          name: 'Primary Container',
          variable: 'primary-container'
        }, {
          name: 'On Primary Container',
          variable: 'on-primary-container'
        }
      ]
    }, {
      name: 'Secondary',
      values: [
        {
          name: 'Secondary',
          variable: 'secondary'
        }, {
          name: 'On Secondary',
          variable: 'on-secondary'
        }, {
          name: 'Secondary Container',
          variable: 'secondary-container'
        }, {
          name: 'On Secondary Container',
          variable: 'on-secondary-container'
        }
      ]
    }, {
      name: 'Tertiary',
      values: [
        {
          name: 'Tertiary',
          variable: 'tertiary'
        }, {
          name: 'On Tertiary',
          variable: 'on-tertiary'
        }, {
          name: 'Tertiary Container',
          variable: 'tertiary-container'
        }, {
          name: 'On Tertiary Container',
          variable: 'on-tertiary-container'
        }
      ]
    }, {
      name: 'Surfaces',
      values: [
        {
          name: 'Surface',
          variable: 'surface'
        }, {
          name: 'On Surface',
          variable: 'on-surface'
        }, {
          name: 'Surface Variant',
          variable: 'surface-variant'
        }, {
          name: 'On Surface Variant',
          variable: 'on-surface-variant'
        }
      ]
    }, {
      name: 'Background',
      values: [
        {
          name: 'Background',
          variable: 'background'
        }, {
          name: 'On Background',
          variable: 'on-background'
        }
      ]
    }, {
      name: 'Borders',
      values: [
        {
          name: 'Outline',
          variable: 'outline'
        }, {
          name: 'Outline Variant',
          variable: 'outline-variant'
        }
      ]
    }
  ]
  return(
    <div className="my-8 w-full section">
      <div className="flex flex-col">
        <h2 className="spatial text-sm mb-4">Current theme</h2>
        <p>I wanted to take a different approach to theming my portfolio for v5 and thought using <a href="https://github.com/material-foundation/material-color-utilities" className="text-link--icon" target="_blank">Google&apos;s Material 3 dynamic color functions</a> could be a fun way to drive more personalized theming on the site. Check out your current theme below:</p>
      </div>
      <div className="grid grid-cols-1 gap-0 w-full max-w-4xl px-0 mx-auto overflow-hidden border border-themeOutlineVariant rounded-lg">
        <div className="p-3 bg-themeSurfaceVariant">
          <h4 className="text-lg">Current Theme Tokens</h4>
        </div>
        {
          tokens.map((item, i) => (
            <div className={`flex flex-col gap-0 p-3 ${i !== (tokens.length - 1) && 'border-b'} border-themeOutlineVariant`} key={i}>
              <span className="flex spatial text-xs mb-2">{item.name}</span>
              <ul className="flex flex-row gap-2 flex-wrap">
              {
                item.values.map((color,i) => (
                  <li className="transition flex items-center gap-1.5 pr-2 text-themeOnBackground rounded-md border border-themeOutlineVariant overflow-hidden relative" key={i}>
                    <span className="h-6 w-6 rounded-none border-r border-themeOutlineVariant" style={{ background: `var(--md-sys-color-${color.variable})`}}/>
                    <span className="text-xs">{color.name}</span>
                    <span className="absolute top-0 bottom-0 left-0 right-0 z-0"/>
                  </li>
                ))
              }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export const build = {
  storage: {
    name: 'GitHub',
    link: 'https://github.com/ryan-parag/ryanparag.com-v5'
  },
  built: {
    name: 'Next.js',
    link: 'https://nextjs.org/'
  },
  deploy: {
    name: 'Vercel',
    link: 'https://vercel.com/'
  },
  style: {
    name: 'TailwindCSS',
    link: 'https://tailwindcss.com/'
  },
  animation: {
    name: 'Framer Motion',
    link: 'https://www.framer.com/motion/'
  },
  typography: {
    name: 'Right Serif and Grotesk',
    link: 'https://pangrampangram.com/'
  }
}


const Colophon = () => {

  return(
    <div>
      <div className="section">
        <h3>Colophon</h3>
        <p>This is the 5th version of my portfolio and I designed and developed it using <a href={build.built.link} target="_blank" className="text-link--icon">{build.built.name}</a> to build, <a href={build.style.link} target="_blank" className="text-link--icon">{build.style.name}</a> for styling, <a href={build.animation.link} target="_blank" className="text-link--icon">{build.animation.name}</a> for animation, <a href={build.deploy.link} target="_blank" className="text-link--icon">{build.deploy.name}</a> for deploying/hosting, and <a href={build.storage.link} target="_blank" className="text-link--icon">{build.storage.name}</a> for storage. Typography is set in <a href={build.typography.link} target="_blank" className="text-link--icon">{build.typography.name}</a>.</p>
        <p>I began keeping track of the past versions of my portfolio in a timeline project – <Link href={'/projects/portfolio-timeline'} className="link-shadow transform active:scale-95 inline-flex items-center gap-1">take a look</Link> and see the changes I added through the years!</p>
      </div>
      <Theme/>
    </div>
  )
}

export default Colophon