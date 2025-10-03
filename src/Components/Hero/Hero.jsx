import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-img.png'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt='' />
            <h1><span>SWIFT</span> —Sixth Team of Monitor 2k25</h1>
            <p>Where Speed Meets Creativity, Its More Than Solidarity. Swift: Driven By Passion, Powered By Teamwork</p>
            <div className="hero-action">
                <div
                    className="hero-see-more"
                    onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
                >
                    See More
                </div>

                <div
                    className="hero-resume"
                    onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
                >
                    Our Activity
                </div>
            </div>
        </div>
    )
}

export default Hero
