import React from 'react'
import "../styles/contact.css"
export default function Contact() {
  return (
    <div className='contact'  id="contact">
      <div className='contact-heading'>
        Contact Me
      </div>
      <div className="contact-animation">
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_DnLK6k.json"  
        background="transparent"  speed="1"  
        style={{width: "550px", height: "550px"}}
          loop  autoplay></lottie-player>
      </div>
    </div>
  )
}
