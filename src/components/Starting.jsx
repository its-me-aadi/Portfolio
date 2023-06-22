import React from 'react'
import "../styles/starting.css"
export default function Starting() {
  return (
    <div style={{marginTop:"3%"}} className='starting'>
      <div className='starting-left-section'>
        <div className='starting-heading'>
          <h1 >Aditya Sharma</h1>
        </div>
        <div>
          <h2 className='starting-subheading'>Full Stack Developer && Programmer</h2>
        </div>
        <div className='starting-paragraph'>
          Hey, there, geeks! I'm a third-year undergraduate student @IIIT Surat, pursuing a bachelor's degree in electronics and communication engineering.I love doing Web D and competitive programming.Constantly keen to learn new stuff.
        </div>
      </div>
      <div className='starting-animation'>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_bP3BLu.json" background="transparent" speed="1" style={{ width: "350px", height: "350px" }} loop autoplay></lottie-player>
      </div>
    </div>
  )
}
