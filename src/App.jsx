import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import FeaturedProjects from './components/FeaturedProjects'
import AboutMe1 from './components/AboutMe1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='   font-bebas h-full' >
        <Navbar />
      <div className=' lg:mx-28 px-4'>
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
        <Intro />
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
        <FeaturedProjects />
        <hr className=' text-secondary lg:-mx-28 -px-4 justify-center'/>
        <AboutMe1 />
      </div>

    </div>
  )
}

export default App
