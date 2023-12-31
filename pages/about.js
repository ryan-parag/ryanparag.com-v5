import React from 'react'
import Layout from '@/components/Layout';
import AboutContent from '@/components/AboutContent';
import CTA from '@/components/CTA';

export default function Page() {

  return (
    <Layout>
      <AboutContent/>
      <CTA/>
    </Layout>
  )
}