import React, { useState } from 'react'
import './Resume.css'
import theme_pattern from '../../assets/theme_pattern.png'
import resume_notes from '../../assets/resume_notes.js'

const Resume = () => {
    const [selectedResume, setSelectedResume] = useState(null);

    const renderDetail = (detail) => {
        return detail.map((item, index) => {
            if (typeof item === "string") {
                return <p key={index}>{item}</p>
            } else if (typeof item === "object" && item.list) {
                return (
                    <div key={index} className="resume-section">
                        {item.title && <h4>{item.title}</h4>}
                        <ul>
                            {item.list.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
            return null;
        })
    }

    return (
        <div id='resume' className='resume'>
            <div className="resume-title">
                <h1>Resume</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="resume-container">
                {resume_notes.map((resume, index) => {
                    return (
                        <div key={index} className='resume-format'>
                            <h3>{resume.s_no}</h3>
                            <h2>{resume.s_name}</h2>
                            <p>{resume.s_desc}</p>
                            <div
                                className='resume-readmore'
                                onClick={() => setSelectedResume(resume)}
                            >
                                <p>Read More ⟶</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {selectedResume && (
                <div className="modal-overlay" onClick={() => setSelectedResume(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedResume.s_name}</h2>
                        <div className="resume-details">
                            {renderDetail(selectedResume.s_detail)}
                        </div>
                        <button onClick={() => setSelectedResume(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Resume
