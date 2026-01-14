import FeaturedSchools from '@/components/blocks/featured-schools'
import FeaturedTrainings from '@/components/blocks/featured-training'
import Hero from '@/components/blocks/hero'
import LatestContents from '@/components/blocks/latest-content'
import Mission from '@/components/blocks/mission'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <section className='max-w-7xl mx-auto'>
        <FeaturedSchools />
        <FeaturedTrainings />
        <LatestContents />
      </section>

      <Mission />
    </div>
  )
}

export default HomePage