import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='   font-bebas h-full' >
        <Navbar />
        <Home />
        <About />
      <div className=' lg:mx-28 px-4'>

        <Contact />
      
      </div>

    </div>
  )
}

export default App
