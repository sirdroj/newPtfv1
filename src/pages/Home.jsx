import React from 'react'
import Intro from '../components/Intro'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutMe1 from '../components/AboutMe1'
import Experience_section from '../components/Experience_section'

const Home = ({setpg}) => {
  return (
    <div className=' lg:mx-28 px-4'>
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
        <Intro />
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
        <Experience_section />
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
        <FeaturedProjects />
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
        <AboutMe1 setpg={setpg}/>
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
      </div>
  )
}

export default Home