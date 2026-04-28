import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import ProjectGallery from '@/components/ProjectGallery'
import { sideProjects } from '@/data/sideProjects'
import Link from 'next/link'

export default function SideProjectPage({ project }) {

  console.log(sideProjects)
  return (
    <Layout>
      <div className="section px-4 md:!px-0">

        {/* Header */}
        <div className="flex flex-col items-start gap-6 mb-12">
          <div className="h-16 w-16 relative flex-shrink-0">
            <Image alt={project.title} src={`/projects/${project.logo}`} layout="fill" />
          </div>
          <div className="flex-1">
            <h1 className="mb-1">{project.title}</h1>
            <p className="text-lg opacity-70 !mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button buttonPrimary inline-flex"
            >
              View Project
              <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Long description */}
        {project.longDescription && (
          <div className="max-w-4xl mx-auto mt-8">
            <p>{project.longDescription}</p>
          </div>
        )}

      </div>
      {/* Images */}
      {project.images?.length > 0 && (
        <div className="w-full max-w-6xl mx-auto px-4 lg:px-0">
          <ProjectGallery images={project.images} />
        </div>
      )}

      <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 my-6 gap-4">
        <div className="h-px bg-themeOutline w-20 my-16"/>
        <h3 className="mb-4 col-span-2 md:col-span-3">View more projects from the Playground</h3>
        {
          sideProjects.map((item,i) => (
            item.slug !== project.slug && (
              <Link key={i} href={`/projects/${item.slug}`} className="mt-auto">
                <div className="w-full flex flex-col gap-2 p-3 rounded-lg bg-themeSurface group relative overflow-hidden border border-themeOutlineVariant">
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-themeSurfaceVariant opacity-0 group-hover:opacity-40 transition z-0"/>
                  <div className="h-8 w-8 overflow-hidden rounded-lg relative">
                    <Image alt={item.title} src={`/projects/${item.logo}`} layout="fill"/>
                  </div>
                  <strong className="text-base font-bold">{item.title}</strong>
                  
                    <span className="text-sm text-themePrimary">
                      View Project
                    </span>
                </div>
              </Link>
            )
          ))
        }
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: sideProjects.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const project = sideProjects.find(p => p.slug === params.slug) || null
  return { props: { project } }
}
