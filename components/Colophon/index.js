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
          name: 'Background',
          variable: 'background'
        }, {
          name: 'On Background',
          variable: 'on-background'
        }, {
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
    <div className="my-8">
      <h2 className="spatial text-sm mb-4">Current theme</h2>
      <p>I wanted to take a different approach to theming my portfolio for v5 and thought using <a href="https://github.com/material-foundation/material-color-utilities" className="text-link--icon" target="_blank">Google's Material 3 dynamic color functions</a> could be a fun way to drive more personalized theming on the site. Check out your current theme below:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {
          tokens.map((item, i) => (
            <ul className="flex flex-col" key={i}>
              <li className="spatial text-xs mb-2">{item.name}</li>
              {
                item.values.map((color,i) => (
                  <li className="flex items-center py-1" key={i}>
                    <span className="h-4 w-4 rounded-full mr-2 border border-black border-opacity-10 dark:border-white dark:border-opacity-10" style={{ background: `var(--md-sys-color-${color.variable})`}}/>
                    <span className="text-xs font-mono">{color.name}</span>
                  </li>
                ))
              }
            </ul>
          ))
        }
      </div>
    </div>
  )
}


const Colophon = () => {

  const build = {
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
    typography: {
      name: 'Right Serif and Grotesk',
      link: 'https://pangrampangram.com/'
    }
  }

  const portfolios = [
    {
      version: '2',
      link: 'https://2020.ryanparag.com'
    }, {
      version: '3',
      link: 'https://2022.ryanparag.com'
    }, {
      version: '4',
      link: 'https://2023.ryanparag.com'
    }
  ]

  return(
    <div>
      <h3>Colophon</h3>
      <p>This is the 5th version of my portfolio and I designed and developed it using <a href={build.built.link} target="_blank" className="text-link--icon">{build.built.name}</a> to build, <a href={build.style.link} target="_blank" className="text-link--icon">{build.style.name}</a> for styling, <a href={build.deploy.link} target="_blank" className="text-link--icon">{build.deploy.name}</a> for deploying/hosting, and <a href={build.storage.link} target="_blank" className="text-link--icon">{build.storage.name}</a> for storage. Typography is set in <a href={build.typography.link} target="_blank" className="text-link--icon">{build.typography.name}</a>.</p>
      <Theme/>
      <div>
        <h2 className="spatial text-sm mb-4">Previous portfolios:</h2>
        <div className="flex items-center">
          {
            portfolios.map((item,i) => (
              <a key={i} className="button mr-4" href={item.link}>Version {item.version}</a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Colophon