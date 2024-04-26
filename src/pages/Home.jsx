import React from 'react'
import Intro from '../components/Intro'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutMe1 from '../components/AboutMe1'

const Home = () => {
  return (
    <div className=' lg:mx-28 px-4'>
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
        <Intro />
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
        <FeaturedProjects />
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
        <AboutMe1 />
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
      </div>
  )
}

export default Home