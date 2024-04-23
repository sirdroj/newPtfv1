import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import FeaturedProjects from './components/FeaturedProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' m-0  font-bebas h-full' >
        <Navbar />
      <div className=' mx-28'>
        <hr className=' text-secondary mx-4'/>
        <Intro />
        <FeaturedProjects />
      </div>

    </div>
  )
}

export default App
