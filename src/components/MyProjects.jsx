import React from 'react'
import ProjectCard from './projectCard'
import ProjectsData from "../Projects.json"
import "../styles/projects.css"
export default function MyProjects() {

  return (
    <div className='myprojects'  id="projects">
        <div style={{display:'flex'}}>
            <div className='heading'>
                My Projects
            </div>
            <div>
               <a href="https://github.com/its-me-aadi/its-me-aadi" target='blank' className='a-project'> Github</a>
            </div>   
        </div>
        <div className='projects'>
        {ProjectsData.map(projectData=>{
            return(
                <ProjectCard 
                name={projectData.name} 
                githublink={projectData.githubLink} 
                projectLink={projectData.projectLink}
                summary={projectData.summary}
                skills={projectData.skills}
                />
            )
        })}
        </div>
    </div>
    
  )
}
