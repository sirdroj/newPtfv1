import React from 'react'
import img1 from "../images/work.png"
const ProjectCard = () => {
  return (
    <div className='w-full my-14 justify-between flex'>
        <div className=' w-2/4 p-4 bg-secondary'>
            <a className='rounded-full bg-matblue2 p-1 px-3'>Conceptual Work</a>
            <div className='p-10 py-20'>
                <img src={img1} alt=""/>
            </div>
        </div>
        <div className='w-2/4 pl-12'>
            <h1 className=' font-manrope text-LightBlue text-[32px]'>Promotional landing page for our favorite show</h1>
            <p className=' font-manrope text-secondary text-lg mt-4'>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
            <div className='mt-8 font-manrope'>
                <h1 className=' py-4 font-semibold  text-base text-LightBlue border-b-[1px] border-dark1'>PROJECT INFO</h1>
                
                <div className='py-4 flex items-center justify-between border-b-[1px] border-dark1'>
                    <div>Year</div>
                    <div>2023</div>
                </div>
                <div className='py-4 flex items-center justify-between border-b-[1px] border-dark1'>
                    <div>Role</div>
                    <div>Developer</div>
                </div>

            </div>
        
        </div>
    </div>
  )
}

export default ProjectCard