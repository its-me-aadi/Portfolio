import React, { useState } from 'react'
import "../styles/skills.css"
export default function Skills() {

  const [skills, setSkills] = useState(["C/C++", "HTML", "CSS", "JS", "NodeJs", "REST API"]);
  const profSkills = ["C/C++", "HTML", "CSS", "JS", "NodeJs", "REST API"];
  const frameworks = ["React.Js", "Express.Js", "jQuery", "EJS"];
  const database = ["MongoDB", "SQL"];
  const tools = ["Github", "Atlas", "Git", "Postman"];

  function HandleClick(event) {
    const { name } = event.target;
    if (name === "button2") { setSkills(profSkills) }
    else if (name === "button1") { setSkills(frameworks) }
    else if (name === "button3") { setSkills(tools) }
    else if (name === "button4") { setSkills(database) }
  }

  return (
    <div className='skills'>
      <div className='skills-left-section'>
        <div className='skills-heading'>
          <h1 >Skills</h1>
        </div>
        <div className='skills-title-buttons'>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type='button' onClick={HandleClick} name='button2' className="skills-title-button1and4">Proficient Skills</button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type='button' onClick={HandleClick} name='button1' className="skills-title-button2and3">Frameworks/Libraries</button>
            <button type='button' onClick={HandleClick} name='button3' className="skills-title-button2and3">Platforms and Tools</button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type='button' onClick={HandleClick} name='button4' className="skills-title-button1and4">Database</button>
          </div>
        </div>
      </div>
      <div className='skills-right-section'>
        <div className='skills-right-section-card'>
        <div>
        <div className='skills-right-section-heading'>
          Key skills
        </div>
        <div className='skills-right-section-lists'>
        <ul>
            {skills.map((skill,index) => {
                return (index<=3 && <li className='skills-skill-listitem'>{skill}</li>)
              })}
        </ul>
        <ul>
            {skills.map((skill,index) => {
                return (index>3 && <li className='skills-skill-listitem'>{skill}</li>)
              })}
        </ul>
        </div>
        </div>
      </div>
      </div>
    </div>

  )
}
