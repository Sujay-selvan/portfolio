import { useState } from 'react'
import './App.css'

import Menu from './components/nav'
import Home from './components/home'
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
         <Home/>         
         <About/>
         <Skills/>
         <Edu/>
         <Project/>
         <Contact/>
      </div>
   )
}

export default App
