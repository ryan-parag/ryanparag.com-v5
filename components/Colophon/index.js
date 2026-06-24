import { SideProject } from "../Role";

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
      <div className="grid grid-cols-1 gap-0 w-full max-w-4xl px-4 lg:!px-0 mx-auto overflow-hidden border border-themeOutlineVariant rounded-lg">
        {
          tokens.map((item, i) => (
            <div className="flex flex-col gap-0 p-3 border-b border-themeOutlineVariant" key={i}>
              <span className="flex spatial text-xs mb-2">{item.name}</span>
              <ul className="flex flex-row gap-2 flex-wrap">
              {
                item.values.map((color,i) => (
                  <li className="transition flex items-center gap-1.5 pr-2 text-themeOnBackground rounded-md border border-themeOutline overflow-hidden relative" key={i}>
                    <span className="h-6 w-6 rounded-none border-r border-themeOutline" style={{ background: `var(--md-sys-color-${color.variable})`}}/>
                    <span className="text-xs">{color.name}</span>
                    <span className="absolute top-0 bottom-0 left-0 right-0 z-0 bg-gradient-to-t from-black/10 to-transparent"/>
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

  const portfolios = [
    {
      version: '1 (2019)',
      link: 'https://2019.ryanparag.com'
    },{
      version: '2 (2020)',
      link: 'https://2020.ryanparag.com'
    }, {
      version: '3 (2021)',
      link: 'https://2021.ryanparag.com'
    }, {
      version: '4 (2023)',
      link: 'https://2023.ryanparag.com'
    }
  ]

  return(
    <div>
      <div className="section">
        <h3>Colophon</h3>
        <p>This is the 5th version of my portfolio and I designed and developed it using <a href={build.built.link} target="_blank" className="text-link--icon">{build.built.name}</a> to build, <a href={build.style.link} target="_blank" className="text-link--icon">{build.style.name}</a> for styling, <a href={build.animation.link} target="_blank" className="text-link--icon">{build.animation.name}</a> for animation, <a href={build.deploy.link} target="_blank" className="text-link--icon">{build.deploy.name}</a> for deploying/hosting, and <a href={build.storage.link} target="_blank" className="text-link--icon">{build.storage.name}</a> for storage. Typography is set in <a href={build.typography.link} target="_blank" className="text-link--icon">{build.typography.name}</a>.</p>
      </div>
      <Theme/>
      <div className="section">
        <h2 className="spatial text-sm mb-4">Previous portfolios:</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {
            portfolios.map((item,i) => (
              <a key={i} className="button" href={item.link} target="_blank">Version {item.version}</a>
            ))
          }
        </div>
        <div className="my-4 text-xs uppercase text-themeOnSurfaceVariant text-center w-full flex flex-row items-center">
          <span className="h-px bg-themeOutlineVariant w-full block mr-4"/>
          or
          <span className="h-px bg-themeOutlineVariant w-full block ml-4"/>
        </div>
        <div className="flex items-center justify-center w-full">
          <SideProject
            slug={'portfolio-timeline'}
            title={'Portfolio Timeline'}
            description={'A timeline viewer for past versions of my portfolio'}
            logo={'timeline-logo.svg'}
            delay={0}
            img={'/projects/preview-timeline.png'}
          />
        </div>
      </div>
    </div>
  )
}

export default Colophon