import React, { useState } from 'react'
import './Gallery.css'
import theme_pattern from '../../assets/theme_pattern.png'
import galleryData from '../../assets/galleryData'

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div id='gallery' className='gallery'>
      <div className='gallery-title'>
        <h1>Gallery</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* Thumbnail gallery di halaman utama */}
      <div className="gallery-container">
        {galleryData.slice(0, 6).map((gallery, index) => ( // tampilkan sebagian dulu
          <img key={index} src={gallery.g_img} alt="" />
        ))}
      </div>

      <div
        className="gallery-showmore"
        onClick={() => setIsModalOpen(true)}
      >
        <p>Show More</p>
        <h1>⟶</h1>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="gallery-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Our Gallery</h2>
            <div className="gallery-modal-images">
              {galleryData.map((gallery, index) => (
                <img key={index} src={gallery.g_img} alt={`Gallery ${index}`} />
              ))}
            </div>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
