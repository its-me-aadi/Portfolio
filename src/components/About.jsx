import React from 'react'
import "../styles/about.css"
export default function About() {
  return (
    <div className='about'>
      <div className='about-left-section'>
        <div className='about-heading'>
          <h1 >About Me</h1>
        </div>
        <div className='about-paragraph'>
          <p>
            Hey world, I'm a full-Stack developer From India. I am currently pursuing my B.Tech. in
            Electronics and Communication Engineering from IIIT-SURAT. Always prefer to write code with less complexity, and always try to create the best user interface.
            <br /><br />
            Although I have completed Full-Stack Web development, there are still many things to learn.
            always working on new projects and learning more and more new things every day. Currently, I am working as
            JUNIOR DEVELOPER at GDSC-IIIT-SURAT and as a MERN Stack Intern at WICTRONIX.
            <br /><br />
            Currently Exploaring Data Structures and Algorithm.Alway eager to learn new thing.
          </p>
        </div>
      </div>
      <div>
        {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_tr1pjkop.json" background="transparent" speed="1" style={{ width: "400px", height: "400px" }} loop autoplay></lottie-player> */}
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_ZQhQzO.json"  background="transparent"  speed="1"  style={{ width: "400px", height: "400px" ,position:"relative",top:"100px",rotate:"270deg"}}  loop  autoplay></lottie-player>
        </div>
    </div>
  )
}
