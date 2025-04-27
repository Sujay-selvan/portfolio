import { useState } from 'react'
import './App.css'

import Menu from './components/nav'
import About from './components/about'
import Skills from './components/skills'
import Edu from './components/education'
import Project from './components/project'
import Contact from './components/contact'

function App() {
   return (
      <div className='conatiner'>
         <div className='relative w-full flex justify-center'>
            <Menu />
         </div>
         {/* Home page */}
         <div className="home relative bg-green-600 h-svh flex flex-col items-center justify-center text-center">
            <p className="text-[4rem] font-black absolute">Full Stack</p>
            <p className="text-[5rem] font-black text-white absolute [-webkit-text-stroke:2px_black]">Developer</p>
         </div>
         <About/>
         <Skills/>
         <Edu/>
         <Project/>
         <Contact/>
      </div>
   )
}

export default App
