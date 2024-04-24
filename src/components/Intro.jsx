import React from 'react'

const Intro = () => {
    return (
        <div className='flex justify-between w-full item-center'>

            <div className=' my-36 w-2/5'>
                <div className='text-LightBlue font-normal text-8xl'>
                    <h1>HI, I AM </h1>
                    <hi>AMAN SHARMA</hi>
                </div>
                <p className='font-medium text-lg'>A Bangalore based Software engineer passionate about building accessible and user friendly Software.</p>
                <div className='flex'>
                    <a className="mx-2 text-gray-600 text-base font-medium bg-secondary rounded-full p-2 px-3 text-center items-center flex">CONTACT ME <div className='ml-3 bg-black rounded-full w-2 h-2 items-center flex'></div></a>
                    <a className="mx-2 bg-secondary rounded-full p-2"><img src='icon/Linkedin.svg' /></a>
                    <a className="mx-2 bg-secondary rounded-full p-2"><img src='icon/Github.svg' /></a>
                </div>
            </div>

            <div className='w-2/5 py-10'>
                <img src='hero.png' className='w-full '/>
               </div>
        </div>
    )
}

export default Intro