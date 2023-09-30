import React from 'react'
import Layout from '@/components/Layout';
import ResumePage from '@/components/Resume';

export default function Page() {

  return (
    <Layout>
      <div className="w-full mx-auto max-w-7xl px-4">
        <ResumePage/>
      </div>
    </Layout>
  )
}