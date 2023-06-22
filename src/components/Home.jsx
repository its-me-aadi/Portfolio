import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Starting from './Starting'
import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import Experience from './Experience'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Starting/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
    <Footer/>
    </div>
  )
}
