import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
import Resume from './Components/Resume/Resume';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <Profile />
      <Resume />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App