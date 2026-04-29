import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import ProjectGallery from '@/components/ProjectGallery'
import { sideProjects } from '@/data/sideProjects'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function SideProjectPage({ project }) {

  return (
    <Layout>
      <div className="section px-4 md:!px-0">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, top: 48 }}
          animate={{ opacity: 1, top: 0 }}
          className="flex flex-col items-start gap-6 mb-6 transform relative"
          transition={{  duration: 0.8, delay: 0.4, ease: [0, 0.71, 0.2, 1.01], }}
        >
          <motion.div
            className="h-16 w-16 relative flex-shrink-0"
            initial={{ opacity: 0, top: 24, rotate: 15 }}
            animate={{ opacity: 1, top: 0, rotate: 0 }}
            transition={{  duration: 0.8, delay: 0.6, ease: [0, 0.71, 0.2, 1.01], }}
          >
            <Image alt={project.title} src={`/projects/${project.logo}`} layout="fill" />
          </motion.div>
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
        </motion.div>

        {/* Long description */}
        {project.longDescription && (
          <motion.div
            initial={{ opacity: 0, top: 24 }}
            animate={{ opacity: 1, top: 0 }}
            className="max-w-4xl mx-auto mt-8 relative transform"
            transition={{  duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01], }}
          >
            <p>{project.longDescription}</p>
          </motion.div>
        )}

      </div>
      {/* Images */}
      {project.images?.length > 0 && (
        <div className="w-full max-w-6xl mx-auto px-4 lg:px-0">
          <ProjectGallery images={project.images} />
        </div>
      )}

      <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 my-6 gap-4 px-4 lg:px-0">
        <div className="h-px bg-themeOutline w-20 my-16"/>
        <h3 className="mb-4 col-span-2 md:col-span-3">View more projects from the Playground</h3>
        <AnimatePresence mode="wait">
          {
            sideProjects.map((item,i) => (
              item.slug !== project.slug && (
                <Link key={i} href={`/projects/${item.slug}`} className="mt-auto">
                  <motion.div
                    initial={{ opacity: 0, top: 16 }}
                    animate={{ opacity: 1, top: 0 }}
                    whileInView={{ opacity: 1, top: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 * i, ease: [0, 0.71, 0.2, 1.01] }}
                    className="transition w-full flex flex-col gap-2 p-3 rounded-lg bg-themeSurface group relative overflow-hidden border border-themeOutlineVariant"
                  >
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-themeSurfaceVariant opacity-0 group-hover:opacity-40 transition z-0"/>
                    <div className="h-8 w-8 overflow-hidden rounded-lg relative">
                      <Image alt={item.title} src={`/projects/${item.logo}`} layout="fill"/>
                    </div>
                    <strong className="text-sm lg:text-base font-bold truncate">{item.title}</strong>
                    
                      <span className="text-sm text-themePrimary">
                        View Project
                      </span>
                  </motion.div>
                </Link>
              )
            ))
          }
        </AnimatePresence>
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
