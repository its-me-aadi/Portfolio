import React from 'react'
import "../styles/projectCard.css"
export default function ProjectCard(props) {
  return (
    <div className='card-body'>
        <div className='card-heading'>
            <div>
                Folder Logo
            </div>
            <div className='card-heading-links'>
                <div className='card-heading-link'>
                    <a href={props.githublink}>Github</a></div>
                <div className='card-heading-link'>
                    <a href={props.projectLink}></a>Link
                </div>
            </div>
        </div>
        <div>
        {props.name}
        </div>
        <div>
            {props.summary}
        </div>
        <div className='card-footer'>
            {props.skills.map(skill=>{
                return (
                    <p>{skill}</p>
                )
            })}
        </div>
    </div>
  )
}
