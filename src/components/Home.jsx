import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Starting from './Starting'
import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import Experience from './Experience'
import MyProjects from './MyProjects'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Starting />
      <About />
      <Skills />
      <Experience />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  )
}
