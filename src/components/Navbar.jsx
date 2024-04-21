import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full px-14 pt-6 pb-2 text-secondary flex justify-between items-center'>
        <div className=' text-[32px] '>Aman Sharma</div>
        <div className=' text-base '> 
            <a className='mx-4 cursor-pointer'>Work</a>
            <a className='mx-4 cursor-pointer'>About</a>
            <a className=' ml-4 cursor-pointer'> Contact</a>
        </div>
    </div>
  )
}

export default Navbar