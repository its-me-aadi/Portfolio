import React from 'react'
import ProjectCard from './projectCard'
import ProjectsData from "../Projects.json"
import "../styles/projects.css"
export default function MyProjects() {



  return (
    <div className='myprojects'>
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
  )
}
