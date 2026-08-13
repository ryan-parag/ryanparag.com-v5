import React from 'react'
import Layout from '@/components/Layout';
import AboutContent from '@/components/AboutContent';
import CTA from '@/components/CTA';

export default function Page() {

  return (
    <Layout
      title="About — Ryan Parag, Product Designer & Design Lead"
      description="Learn more about Ryan Parag, a Tampa-based Product Designer and Design Lead with experience across Owens Corning, TrustLayer, Masonite, and Chargebacks911."
      path="/about"
    >
      <AboutContent/>
      <CTA/>
    </Layout>
  )
}