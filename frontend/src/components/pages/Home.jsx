import React from 'react'
import Layouts from '../common/Layout'
import Layout from '../common/Layout'
import Hero from '../common/Hero'
import FeaturedCategories from '../common/FeaturedCategories'
import FeaturedCourses from '../common/FeaturedCourses'

const Home = () => {
  return (
    <Layout>
        <Hero />
        <FeaturedCategories/>
        <FeaturedCourses/>
    </Layout>
  )
}

export default Home
