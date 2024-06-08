import React from 'react'
import "../styles/about.css"
export default function About() {
  return (
    <div className='about' id="about">
      <div className='about-left-section'>
        <div className='about-heading'>
          <h1 >About Me</h1>
        </div>
        <div className='about-paragraph'>
          <p>
            Hey world, I'm a full-Stack developer From India. I am currently pursuing my B.Tech. in
            Electronics and Communication Engineering from IIIT-SURAT. Always prefer to write code with less complexity, and always try to create the best user interface.
            <br /><br />
            Although I have completed Full-Stack Web development, there are still many things to learn 
            always working on new projects and learning more and more new things every day.
            <br /><br />
            Currently Exploaring Data Structures and Algorithm.Alway eager to learn new thing.
          </p>
        </div>
      </div>
      <div >
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_ZQhQzO.json"  background="transparent"  speed="1"  style={{ width: "25rem", height: "25rem" ,position:"relative",top:"7rem",rotate:"270deg"}}  className='about-animation' loop  autoplay></lottie-player>
        </div>
    </div>
  )
}
