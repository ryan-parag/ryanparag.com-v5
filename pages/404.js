import React from 'react'
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Page() {

  return (
    <Layout
      title="Page Not Found — Ryan Parag"
      description="The page you're looking for doesn't exist."
    >
      <div className="section">
        <div className="border border-themeOutlineVariant bg-themeSurface p-6 rounded-xl text-center flex flex-col items-center justify-center h-80">
          <h1>404</h1>
          <p>This page could not be found.</p>
          <Link href="/">
            <span className="button">
              Back Home
            </span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}