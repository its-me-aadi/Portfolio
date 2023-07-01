import React from 'react'
import "../styles/navbar.css"

export default function Navbar() {

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    Logo
                </div>
                <div className='navbar-links'>
                    <a href='#home' className='navbar-links-a' name="style1">Home</a>
                    <a href='#about' className='navbar-links-a'  name="style2" >About</a>
                    <a href='#skills'className='navbar-links-a'  name="style3" >Skills</a>
                    <a href='#experience'className='navbar-links-a'  name="style4" >Experience</a>
                    <a href='#projects'className='navbar-links-a'  name="style5" >My Projects</a>
                    <a href='#contact' className='navbar-links-a'  name="style6" >Contact</a>
                    <a href="https://drive.google.com/file/d/13OgeyguxOtQj_YEpcHWgzbdKi7mRxhMq/view?usp=drive_link" target='blank'className='navbar-button'  name="style7" >Resume</a>
                </div>
                <a href="#a" className='icon' >
                        <i class="fa fa-bars"></i>
                </a>
            </nav>
        </div>
    )
}
