import React from 'react'
import "../styles/navbar.css"

export default function Navbar() {

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    Portfolio
                </div>
                <div className='navbar-links'>
                    <a href='#home' className='navbar-links-a' name="style1">Home</a>
                    <a href='#about' className='navbar-links-a' name="style2" >About</a>
                    <a href='#skills' className='navbar-links-a' name="style3" >Skills</a>
                    <a href='#experience' className='navbar-links-a' name="style4" >Experience</a>
                    <a href='#projects' className='navbar-links-a' name="style5" >My Projects</a>
                    <a href='#contact' className='navbar-links-a' name="style6" >Contact</a>
                    <a href="https://drive.google.com/drive/folders/1TDdr_mwNopOtyB2kBJGRiCb7pODQ4YB8" target='blank' className='navbar-button' name="style7" >Resume</a>
                </div>
                <div className='icon-div-icon'>
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_s4tubmwg.json"  background="transparent"  speed="1"  style={{width: "100px", height: "100px"}}  loop  autoplay></lottie-player>
                </div>
            </nav>
        </div>
    )
}
