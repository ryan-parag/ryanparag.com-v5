import { sideProjects } from '@/data/sideProjects'

const SITE_URL = 'https://ryanparag.com'

function generateSitemap() {
  const staticRoutes = ['/', '/about', '/resume']
  const projectRoutes = sideProjects.map((project) => `/projects/${project.slug}`)
  const routes = [...staticRoutes, ...projectRoutes]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
  </url>`).join('\n')}
</urlset>`
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml')
  res.write(generateSitemap())
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
