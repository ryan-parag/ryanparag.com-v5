import React from 'react'
import Layout from '@/components/Layout';
import ResumePage from '@/components/Resume';

export default function Page() {

  return (
    <Layout
      title="Resume — Ryan Parag, Product Designer & Design Lead"
      description="Ryan Parag's resume: a Tampa-based Product Designer and Design Lead with a background in UX design, design systems, and SaaS product strategy."
      path="/resume"
    >
      <div className="w-full mx-auto max-w-7xl px-4">
        <ResumePage/>
      </div>
    </Layout>
  )
}