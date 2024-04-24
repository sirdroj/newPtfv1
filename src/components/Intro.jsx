import React from 'react'

const Intro = () => {
    return (
        <div className='lg:flex justify-between w-full item-center h-screen mb-16'>

            <div className=' lg:my-36 my-10  lg:w-2/5 w-full'>
                <div className='text-LightBlue font-normal lg:text-8xl text-6xl'>
                    <h1>HI, I AM </h1>
                    <hi>AMAN SHARMA</hi>
                </div>
                <p className='font-medium text-base lg:text-lg text-secondary font-manrope w-full'>A Bangalore based Software engineer passionate about building accessible and user friendly Software.</p>
                <div className='flex mt-10'>
                    <a className="mx-2 text-gray-600 text-base font-medium bg-secondary rounded-full p-2 px-3 text-center items-center align-middle flex"><h1>CONTACT ME</h1> <div className='ml-3 bg-black rounded-full w-2 h-2 items-center flex'></div></a>
                    <a className="mx-2 bg-secondary rounded-full p-2"><img src='icon/Linkedin.svg' /></a>
                    <a className="mx-2 bg-secondary rounded-full p-2"><img src='icon/Github.svg' /></a>
                </div>
            </div>

            <div className='lg:w-2/5 lg:py-10 '>
                <img src='hero.png' className='w-full '/>
               </div>
        </div>
    )
}

export default Intro