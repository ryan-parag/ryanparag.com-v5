import React from 'react'
import WorkList from '@/components/WorkList';
import Intro from '@/components/Intro';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';

export default function Home() {

  return (
    <Layout>
      <Intro/>
      <WorkList/>
      <CTA/>
    </Layout>
  )
}
