import React, { useState } from 'react'
import "../styles/experience.css"
export default function Experience() {

    const [data,setData]=useState({
        role:"MERN Stack(Intern) @",
        organization:"WICTRONIX",
        date:"06/2023-PRESENT",
        link:"https://wictronix.com/",
        list:["Worked on different Industrial projects.","Woked on frontend in ReactJs.","Worked on backend in NodeJs.","Developed user friendly websites"]
    });

    function HandleClick(event){
        const {name,value}=event.target;
        if(name==='button1'){
            setData({
                role:"MERN Stack(Intern) at",
                organization:"@WICTRONIX",
                date:"06/2023-PRESENT",
                link:"https://wictronix.com/",
                list:["Worked on different Industrial projects.","Woked on frontend in ReactJs.","Worked on backend in NodeJs.","Developed user friendly websites"]
            })
        }
        else if(name==='button2'){
            setData({
                role:"Junior Developer at",
                organization:"@GDSC IIIT-SURAT",
                date:"02/2023-PRESENT",
                link:"https://www.linkedin.com/company/dsc-iiitsurat/",
                list:["Worked on Spring Fest's website","Woked on frontend","Developed user friendly website","Fixed bugs from website."]
            })
        }
        else{
            setData({
                role:"FRONTEND developer at",
                organization:"@NICHER",
                date:"02/2023-PRESENT",
                link:"https://nicherindia.me/",
                list:["Build a buisness website for different services.","Modified Template","Hosted Website","Added new features to website."]
            })
        }
    }

  return (
    <div className='section'>
        <div className='experience-heading'>
            Experience
        </div>
        <div className='experience'>
            <div className='experience-left-section'>
                    <button name='button1' onClick={HandleClick}>WICTRONIX</button>
                    <button name='button2' onClick={HandleClick}>GDSC IIIT SURAT</button>
                    <button name='button3' onClick={HandleClick}>NICHER</button> 
            </div>
            <div className='experience-right-section'>
                <div>
                {data.role}
                </div>
                <div>
                    <a href={data.link}>{data.organization}</a>
                </div>
                <div>
                    {data.date}
                </div>
                <div>
                        {data.list.map(listitem=>{
                            return(
                                <p>{listitem}</p>
                            )
                        })}
                </div>
            </div>
        </div>
    </div>
  )
}
