import React from 'react'

const AboutMe1 = ({setpg}) => {
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
                I am a passionate Software Developer with expertise in React and a deep enthusiasm for Artificial Intelligence. With exceptional problem-solving skills and a strong grasp of Data Structures and Algorithms, I thrive in tackling complex challenges efficiently. As a competitive coder, I continuously push my limits, embracing a lifelong learning mindset to stay ahead in the ever-evolving tech landscape. Whether it's building seamless web applications or exploring cutting-edge AI solutions, I am always eager to innovate and grow.                </p>
                <a onClick={()=>setpg(2)} className='cursor-pointer text-highGreen text-base flex items-center mr-6 border-b-2 border-highGreen w-max'> More about me</a>
            </div>
        </div>
    )
}

export default AboutMe1