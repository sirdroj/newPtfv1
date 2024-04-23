import React from 'react'
import ProjectCard from './ProjectCard'

const FeaturedProjects = () => {
  return (
    <div>
        <div>
        <h1 className=' text-7xl text-LightBlue my-2'>Featured Projects</h1>
        <p className=' text-lg text-secondary font-manrope mb-5'>Here are some of the selected projects that showcase my passion for front-end development.</p>
        <ProjectCard />
        </div>
    </div>
  )
}

export default FeaturedProjects