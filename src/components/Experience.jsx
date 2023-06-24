import React, { useState } from 'react'
import "../styles/experience.css"
export default function Experience() {

    const styless = {
        borderLeft: "8px solid whitesmoke",
    }
    const [verticalLine, setVerticalLine] = useState({
        button1: styless,
        button2: {},
        button3: {}
    })
    const [data, setData] = useState({
        role: "MERN Stack Developer (Intern) at",
        organization: "@WICTRONIX",
        date: "06/2023 - PRESENT",
        link: "https://wictronix.com/",
        list: ["Worked on different Industrial projects.", "Woked on frontend in ReactJs.", "Worked on backend in NodeJs.", "Developed user friendly websites"]
    });

    function HandleClick(event) {
        const { name } = event.target;
        if (name === 'button1') {
            setData({
                role: "MERN Stack developer (Intern) at",
                organization: "@WICTRONIX",
                date: "06/2023 - PRESENT",
                link: "https://wictronix.com/",
                list: ["Worked on different Industrial projects.", "Woked on frontend in ReactJs.", "Worked on backend in NodeJs.", "Developed user friendly websites"]
            })
            setVerticalLine({
                button1: styless,
                button2: {},
                button3: {}
            })
        }
        else if (name === 'button2') {
            setData({
                role: "Junior Developer at",
                organization: "@GDSC IIIT-SURAT",
                date: "02/2023 - PRESENT",
                link: "https://www.linkedin.com/company/dsc-iiitsurat/",
                list: ["Worked on Spring Fest's website", "Woked on frontend", "Developed user friendly website", "Fixed bugs from website."]
            })
            setVerticalLine({
                button1: {},
                button2: styless,
                button3: {}

            })
        }
        else {
            setData({
                role: "Frontend Web Developer at",
                organization: "@NICHER",
                date: "02/2023 - PRESENT",
                link: "https://nicherindia.me/",
                list: ["Build a buisness website for different services.", "Modified Template", "Hosted Website", "Added new features to website."]
            })
            setVerticalLine({
                button1: {},
                button2: {},
                button3: styless
            })
        }
    }

    return (
        <div className='section'>
            <div className='experience-heading-and-animation'>
                <div className='experience-heading'>
                    Experience
                </div>
                <div>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_8y3kzptg.json" background="transparent" speed="1" style={{ width: "300px", height: "300px" }} loop autoplay></lottie-player>
                </div>
            </div>
            <div className='experience'>
                <div className='experience-left-section'>
                    <button name='button1' onClick={HandleClick} style={verticalLine.button1} className='experience-left-section-butttons'>WICTRONIX</button>
                    <button name='button2' onClick={HandleClick} className='experience-left-section-butttons' style={verticalLine.button2}>GDSC IIIT SURAT</button>
                    <button name='button3' onClick={HandleClick} className='experience-left-section-butttons' style={verticalLine.button3}>NICHER</button>
                </div>
                <div className='experience-right-section'>
                    <div className='experience-right-section-heading'>
                        {data.role}
                    </div>
                    <div className='experience-right-section-subheading'>
                        <a href={data.link} target='blank' className='a'>{data.organization}</a>
                    </div>
                    <div className='experience-right-section-date'>
                        {data.date}
                    </div>
                    <div className='experience-right-section-list'>
                        {data.list.map(listitem => {
                            return (
                                <li className='experience-right-section-listitems'>{listitem}</li>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
