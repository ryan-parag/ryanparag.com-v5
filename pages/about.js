import React from 'react'
import Link from 'next/link';
import Layout from '@/components/Layout';
import AboutContent from '@/components/AboutContent';

export default function Home() {

  return (
    <Layout>
      <AboutContent/>
    </Layout>
  )
}