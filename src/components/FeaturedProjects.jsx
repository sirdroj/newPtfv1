import React from 'react'
import ProjectCard from './ProjectCard'

const projects=[
    {
        h1:"OpenChat – Speak Your Mind, Unfiltered & Free!",
        p:"OpenChat is a judgment-free space where anyone can express their thoughts freely. No filters, no restrictions—just raw, unfiltered conversations with a community that values true expression.",
        year:"2023",
        role:"Developer",
        livelink:"https://vite-chatapp.vercel.app/",
        gitlink:"https://github.com/sirdroj/vite_chatapp",
        img:"./chatapp.png"
    }
]

const FeaturedProjects = () => {
    return (

        <div className='w-full pt-10' id='work'>
            <h1 className=' text-[42px] lg:text-7xl text-LightBlue my-2'>Featured Projects</h1>
            <p className=' lg:text-lg text-base  text-secondary font-manrope mb-5 w-full'>Here are some of the selected projects that showcase my passion for front-end development.</p>
            {/* <ProjectCard /> */}
            {projects.map((item,idx)=>(
                <ProjectCard data={item} key={idx} />
            ))}
        </div>

    )
}

export default FeaturedProjects