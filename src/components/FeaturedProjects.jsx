import React from 'react'
import ProjectCard from './ProjectCard'

const FeaturedProjects = () => {
    return (

        <div className='w-full pt-10' id='work'>
            <h1 className=' text-[42px] lg:text-7xl text-LightBlue my-2'>Featured Projects</h1>
            <p className=' lg:text-lg text-base  text-secondary font-manrope mb-5 w-full'>Here are some of the selected projects that showcase my passion for front-end development.</p>
            <ProjectCard />
        </div>

    )
}

export default FeaturedProjects