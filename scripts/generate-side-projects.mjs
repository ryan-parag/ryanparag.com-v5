import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content/side-projects')
const outFile = path.join(process.cwd(), 'data/sideProjects.js')

// Curated display order (not chronological)
const ORDER = [
  'scorekeeper',
  'timezones',
  'cutting-board-designer',
  'vanilla-extract-calculator',
  'tampabay-design',
  'donut-drums',
  'slack-themes',
  'race-times',
  'portfolio-timeline',
  'buy-fresh-florida'
]

const filenames = fs.readdirSync(contentDir).filter(name => name.endsWith('.md'))

const projects = filenames.map(filename => {
  const fileContents = fs.readFileSync(path.join(contentDir, filename), 'utf8')
  const { data, content } = matter(fileContents)
  return { ...data, longDescription: content.trim() }
})

projects.sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug))

const banner = `// This file is generated from content/side-projects/*.md — do not edit directly.
// Run \`npm run generate:side-projects\` after changing a project's markdown file.
`

fs.writeFileSync(
  outFile,
  `${banner}\nexport const sideProjects = ${JSON.stringify(projects, null, 2)}\n`
)

console.log(`Generated data/sideProjects.js from ${projects.length} markdown files.`)
