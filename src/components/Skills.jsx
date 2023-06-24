import React, { useState } from 'react'
import "../styles/skills.css"
export default function Skills() {

const [clickedButton,setClickedButton]=useState({
  button1:false,
  button2:true,
  button3:false,
  button4:false
})

function HandleClick(event){
  const {name,value}=event.target;
  setClickedButton(prevValue=>{
    return{
      button1:false,
      button2:false,
      button3:false,
      button4:false,
      [name]:true
    }
  })
}

  return (
    <div style={{marginTop:"3%"}} className='skills'>
      <div className='skills-left-section'>
        <div className='skills-heading'>
          <h1 >Skills</h1>
        </div>
        <div className='skills-title-buttons'>
          <div style={{display:"flex",justifyContent:"center"}}>
          <button type='button' onClick={HandleClick} name='button2' className="skills-title-button1and4">Proficient Skills</button>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <button type='button' onClick={HandleClick} name='button1'className="skills-title-button2and3">Frameworks/Libraries</button>
          <button type='button' onClick={HandleClick} name='button3' className="skills-title-button2and3">Platforms and Tools</button>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <button type='button' onClick={HandleClick} name='button4' className="skills-title-button1and4">Database</button>  
          </div>
        </div>
        {clickedButton.button1 && <div className="skills-skill-buttons">
          <button className='skills-skill-button'>React.Js</button>
          <button className='skills-skill-button'>Express.Js</button>
          <button className='skills-skill-button'>jQuery</button>
          <button className='skills-skill-button'>EJS</button>
        </div>}
        {clickedButton.button2 && <div className="skills-skill-buttons">
        <button className='skills-skill-button'>C/C++</button>
          <button className='skills-skill-button'>HTML</button>
          <button className='skills-skill-button'>CSS</button>
          <button className='skills-skill-button'>JAVASCRIPT</button>
          <button className='skills-skill-button'>BOOTSTRAP</button>
          <button className='skills-skill-button'>NODE JS</button> 
          <button className='skills-skill-button'>REST API</button>
        </div>}
        {clickedButton.button3 && <div className="skills-skill-buttons">
          <button className='skills-skill-button'>GITHUB</button>
          <button className='skills-skill-button'>ATLAS</button>
          <button className='skills-skill-button'>GIT</button>
          <button className='skills-skill-button'>POSTMAN</button>
        </div>}
        {clickedButton.button4 && <div className="skills-skill-buttons">
        <button className='skills-skill-button'>MONGODB</button>
          <button className='skills-skill-button'>SQL</button>
          
        </div>}
        
      </div>
      <div className='skills-right-section'>
      {/* <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_1elvfrxr.json"  background="transparent"  speed="1"  style={{width: "500px", height: "500px"}}  loop autoplay></lottie-player>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> */}
      {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_hueeaqbh.json"  background="transparent"  speed="1"  style={{width: "200px", height: "200px"}}  loop  autoplay></lottie-player> */}
      </div>
    </div>

  )
}
