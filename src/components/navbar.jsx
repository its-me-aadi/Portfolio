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
                    <p className='navbar-links-p'  name="style1" >Home</p>
                    <p className='navbar-links-p'  name="style2" >About</p>
                    <p className='navbar-links-p'  name="style3" >Skills</p>
                    <p className='navbar-links-p'  name="style4" >Experience</p>
                    <p className='navbar-links-p'  name="style5" >My Projects</p>
                    <p className='navbar-links-p'  name="style6" >Contact</p>
                    <a href="https://www.canva.com/design/DAFZNCpa-Ko/bQfizvNu2nmIenf3dKQjpw/edit" target='blank'>
                    <p className='navbar-button'  name="style7" >Resume</p>
                    </a>
                </div>
            </nav>
        </div>
    )
}
