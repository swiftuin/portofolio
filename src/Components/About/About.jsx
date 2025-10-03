import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import about_img from '../../assets/about-img.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About & History</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <h1>Swift adalah bahasa pemrograman modern yang sederhana, aman, cepat, dan serbaguna.</h1>
                        <p>Swift mulai dikembangkan oleh Chris Lattner bersama tim Apple pada 2010 sebagai penerus Objective-C. Pada WWDC 2014, Swift resmi diperkenalkan ke publik sebagai bahasa yang lebih modern, aman, dan mudah dipelajari. Setahun kemudian, 2015, Swift menjadi open-source sehingga komunitas global bisa ikut berkontribusi. Sejak itu Swift terus berkembang dan kini digunakan luas, dari pengembangan aplikasi iOS hingga sistem backend dan cloud.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About