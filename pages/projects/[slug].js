import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import ProjectGallery from '@/components/ProjectGallery'
import { sideProjects } from '@/data/sideProjects'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import BrowserVideo from '@/components/BrowserVideo'
import MobileVideo from '@/components/MobileVideo'
import { SideProject } from '@/components/Role'
import ReactMarkdown from 'react-markdown'

export default function SideProjectPage({ project }) {

  return (
    <Layout
      title={`${project.title} — Ryan Parag`}
      description={project.description}
      path={`/projects/${project.slug}`}
    >
       <motion.div
        initial={{ opacity: 0, top: 48 }}
        animate={{ opacity: 1, top: 0 }}
        className="flex flex-col items-center text-center gap-0 mb-6 transform relative"
        transition={{  duration: 0.8, delay: 0.4, ease: [0, 0.71, 0.2, 1.01], }}
      >
        <motion.div
          className="h-16 w-16 relative flex-shrink-0 mb-4"
          initial={{ opacity: 0, top: 24, rotate: 15 }}
          animate={{ opacity: 1, top: 0, rotate: 0 }}
          transition={{  duration: 0.8, delay: 0.6, ease: [0, 0.71, 0.2, 1.01], }}
        >
          <Image alt={project.title} src={`/projects/${project.logo}`} layout="fill" />
        </motion.div>
        <h1 className="mb-1">{project.title}</h1>
        <p className="text-lg opacity-70 !mb-4">{project.description}</p>
        <div className="inline-flex items-center gap-0 text-sm border border-themeOutlineVariant rounded-md mb-2 overflow-hidden">
          <span className="py-0.5 px-1.5 text-themeOnSurfaceVariant border-r border-themeOutlineVariant">Published</span>
          <span className="py-0.5 px-1.5 font-semibold bg-themeSurfaceVariant text-themeOnSurface">{project.published}</span>
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          className="w-full max-w-6xl mx-auto px-4 lg:px-0 transform relative"
          initial={{ opacity: 0, top: 24 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{  duration: 0.5, delay: 0.8, ease: [0, 0.71, 0.2, 1.01], }}
        >
          {
            project.videos && (
              project.videos.length > 0 && project.videos[0].format === 'browser' ? (
                <BrowserVideo muxId={project.videos[0].src} url={project.link} />
              ) : project.videos[0].format === 'mobile' ? (
                <MobileVideo muxId={project.videos[0].src} />
              ) : null
            )
          }
        </motion.div>
      </AnimatePresence>
      <div className="section px-4 md:!px-0 flex flex-col items-center">
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
      <div className="section px-4 md:!px-0">
        <div className="section !px-0">
          <div className="mx-auto h-px bg-themeOutline w-20 my-12"/>
        </div>

        {/* Long description */}
        {project.longDescription && (
          <motion.div
            initial={{ opacity: 0, top: 24 }}
            animate={{ opacity: 1, top: 0 }}
            className="max-w-4xl mx-auto mt-8 relative transform projectContent"
            transition={{  duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01], }}
          >
            <ReactMarkdown>{project.longDescription}</ReactMarkdown>
          </motion.div>
        )}

      </div>
      {/* Images */}
      {project.images?.length > 0 && (
        <div className="w-full max-w-6xl mx-auto px-4 lg:px-0">
          <ProjectGallery images={project.images} />
        </div>
      )}

      <div className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 my-6 gap-4 px-4 lg:px-0">
        <div className="h-px bg-themeOutline w-20 my-16"/>
        <h2 className="mb-4 col-span-2 md:col-span-3">View more projects from the Playground</h2>
      </div>
      <div className={`w-auto py-8 px-4 md:px-40 overflow-x-scroll overflow-y-hidden scrollbar-hidden mx-auto flex items-start gap-4`}>
        {
          sideProjects.map((item,i) => (
            item.slug !== project.slug && (
              <SideProject
                key={i}
                sideProject={item}
                slug={item.slug}
                title={item.title}
                description={item.description}
                logo={item.logo}
                img={item.images[0]?.src}
                delay={i}
              />
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
