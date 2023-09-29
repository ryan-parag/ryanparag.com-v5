import React, { useState, useEffect } from 'react'
import WorkList from '@/components/WorkList';
import Intro from '@/components/Intro';
import Layout from '@/components/Layout';

export default function Home() {

  return (
    <Layout>
      <Intro/>
      <WorkList/>
    </Layout>
  )
}
