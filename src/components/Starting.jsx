import React, { useState } from 'react'
import 'animate.css';
import "../styles/starting.css"
export default function Starting() {
    const [heading,setHeading]=useState({
      h1:true,
      h2:false,
      h3:false
    });
    function Heading(){
      if(heading.h1){
          setHeading({
            h1:false,
            h2:true,
            h3:false
          });
        }
      else if(heading.h2){
        setHeading({
          h1:false,
          h2:false,
          h3:true
        });
      }
      else{
        setHeading({
          h1:true,
          h2:false,
          h3:false
        });
      }   
    }
    setTimeout( Heading,4000);

  return (
    <div className='starting' id="home">
      <div className='starting-left-section'>
        <div className='starting-heading'>
          <h1>Aditya Sharma</h1>
        </div>
        <div>
          {heading.h1 && <h2 className='starting-subheading'>Full Stack Developer</h2>}
          {heading.h2 && <h2 className='starting-subheading'>Competitive Programmer</h2>}
          {heading.h3 && <h2 className='starting-subheading'>Gamer 🎮</h2>}
        </div>
        <div className='starting-paragraph'>
          Hey, there, geeks! I'm a third-year undergraduate student @IIIT Surat, pursuing a bachelor's degree in electronics and communication engineering. I love doing Web D and competitive programming. Constantly keen to learn new stuff.
        </div>
      </div>
      <div className='starting-animation'>
        {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_bP3BLu.json" background="transparent" speed="1" style={{ width: "350px", height: "350px" }} loop autoplay></lottie-player> */}
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_79Fi9AfmCH.json"  background="transparent"  speed="1"  style={{ width: "350px", height: "350px",postion:"relative", top:"20px",right:"20%" }}  loop  autoplay></lottie-player>
      </div>
    </div>
  )
}
