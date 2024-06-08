import React, { useState } from 'react'
import "../styles/skills.css"
export default function Skills() {

  const profSkills = ["Proficient Skills", "C/C++", "JS", "HTML", "CSS", "NodeJs", "REST API"];
  const frameworks = ["Frameworks and Libraries", "React.Js", "AngularJs","Redux","Express.Js", "jQuery", "EJS"];
  const database = ["Database", "SQL", "MongoDB","","Firebase"];
  const tools = ["Platforms and Tools", "Github", "Atlas", "Git", "Postman"];
  const [skills, setSkills] = useState(profSkills);
  const clickedButton = {
    border: "solid 2px wheat"
  }
  const animationBeforeClick = {
    rotate: "70deg",
    display: "none"
  }
  const animationOnClick = {
    rotate: "70deg",
    animationName: "rocketAnimation",
    animationDuration: "1s",
    zIndex:"3"
  }
  const [animationStyle, setAnimationStyle] = useState(animationBeforeClick);
  const [boom,setBoom]=useState(false);
  const [displayCard,setDisplayCard]=useState(true);
  const [clickStyles, setClickStyles] = useState({
    button2: clickedButton,
    button1: {},
    button3: {},
    button4: {}
  });
  function HandleClick(event) {
    const { name } = event.target;
    setDisplayCard(false);
    setAnimationStyle(animationOnClick);
    setTimeout(function () {
      setAnimationStyle(animationBeforeClick)
      if (name === "button2") { setSkills(profSkills) }
      else if (name === "button1") { setSkills(frameworks) }
      else if (name === "button3") { setSkills(tools) }
      else if (name === "button4") { setSkills(database) }
      setBoom(true);
      setTimeout(function (){
        setBoom(false);setDisplayCard(true);
        setClickStyles({
          button1: {},
          button2: {},
          button3: {},
          button4: {},
          [name]: clickedButton
        })
      },500);
    }, 950);
    

  }



  return (
    <div className='skills' id="skills">
      <div className='skills-left-section'>
        <div className='skills-heading'>
          <h1 >Skills</h1>
        </div>
        <div className='skills-title-buttons'>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type='button' onClick={HandleClick} name='button2' style={clickStyles.button2} className="skills-title-button1and4">Proficient Skills</button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type='button' onClick={HandleClick} name='button1' style={clickStyles.button1} className="skills-title-button2and3">Frameworks and Libraries</button>
            <button type='button' onClick={HandleClick} name='button3' style={clickStyles.button3} className="skills-title-button2and3">Platforms and Tools</button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type='button' onClick={HandleClick} name='button4' style={clickStyles.button4} className="skills-title-button1and4">Database</button>
          </div>
        </div>
        <div style={animationStyle} className='rocket-animation'>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_4tg3fb79.json" background="transparent" speed="1" style={{ width: "200px", height: "200px" }} loop autoplay></lottie-player>
        </div>
      </div>
      {boom && <div className='boom-animation'>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_9eUC58.json" background="transparent" speed="1" style={{width: "300px", height: "300px"}} loop autoplay></lottie-player>
        </div>}
        {(!boom && displayCard )&& <div className='skills-right-section'>
        <div className='skills-right-section-card'>
          <div>
            <div className='skills-right-section-heading'>
              {skills[0]}
            </div>
            <div className='skills-right-section-lists'>
              <ul>
                {skills.map((skill, index) => {
                  return ((index % 2 === 0 && index > 0) && <li className='skills-skill-listitem'>{skill}</li>)
                })}
              </ul>
              <ul>
                {skills.map((skill, index) => {
                  return ((index % 2 !== 0 && index > 0) && <li className='skills-skill-listitem'>{skill}</li>)
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>}
    </div>

  )
}
