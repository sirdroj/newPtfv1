import React from 'react'

const AboutMe1 = () => {
    return (
        <div className='lg:flex justify-between mb-2 h-screen pt-28'>
            <div className=' lg:w-[900px] lg:text-8xl text-[42px] text-LightBlue'>
                About Me
            </div>
            <div className='lg:w-[1800px] lg:px-3 font-manrope'>
                <h1 className=' lg:text-3xl text-xl text-LightBlue mb-4 lg:block hidden'>
                    I am a Software engineer based in Bangalore.
                </h1>
                <p className=" mb-12 text-lg text-secondary">
                    I am a Software engineer based in Bangalore looking for exciting opportunities. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs , Node.js , Python and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing COD. Learning more to improve skill.
                </p>
                <a className='text-highGreen text-base flex items-center mr-6 border-b-2 border-highGreen w-max'> More about me</a>
            </div>
        </div>
    )
}

export default AboutMe1