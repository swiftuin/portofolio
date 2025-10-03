import React from 'react'
import './Profile.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import theme_pattern from '../../assets/theme_pattern.png'
import teamData from '../../assets/teamData'

const Profile = () => {
    return (
        <div id='profile' className="profile-section">
            <div className="profile-title">
                <h1>Meet Our Team</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}
                className="profile-swiper"
            >
                {teamData.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="profile-card">
                            <img src={member.photo} alt={member.Name} className="profile-photo" />
                            <h2>{member.Name}</h2>
                            <p><strong>NIM:</strong> {member.Nim}</p>
                            <p><strong>Motto:</strong> {member.Motto}</p>
                            <p><strong>Fun Fact:</strong> {member.Funfact}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Profile
