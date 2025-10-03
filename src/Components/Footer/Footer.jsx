import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div id='contact' className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h2>Swift Portfolio</h2>
                    <p>© {new Date().getFullYear()} All Rights Reserved</p>
                </div>
                <div className="footer-right">
                    <a href="https://github.com/Afira911" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:your@email.com">Email</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
