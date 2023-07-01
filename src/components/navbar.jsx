import React from 'react'
import "../styles/navbar.css"

export default function Navbar() {
    // const stylesONClick = {
    //     fontWeight: "600",
    //     color: "#FFFFFF",
    // }
    // const styleBeforeClick={
    //     fontWeight: "500",
    //     color: "#888888",
    // }
    // const [styles, setStyles] = useState({
    //     style1:stylesONClick,
    //     style2:styleBeforeClick,
    //     style3:styleBeforeClick,
    //     style4:styleBeforeClick,
    //     style5:styleBeforeClick,
    //     style6:styleBeforeClick,
    //     style7:styleBeforeClick,
    // })
 

    // function HandleClick(event){
    //     // const {name,value}=event.target;
    //     // console.log([name]);
    //     setStyles({ 
    //         style1:styleBeforeClick,
    //         style2:styleBeforeClick,
    //         style3:styleBeforeClick,
    //         style4:styleBeforeClick,
    //         style5:styleBeforeClick,
    //         style6:styleBeforeClick,
    //         style7:styleBeforeClick,
    //         // [name]:stylesONClick

            
    // })
    // }
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
                    <a href="https://www.canva.com/design/DAFZNCpa-Ko/bQfizvNu2nmIenf3dKQjpw/edit" target='blank'className='navbar-button'  name="style7" >Resume</a>
                </div>
            </nav>
        </div>
    )
}
