// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Showreel from './components/Showreel.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Resume from './components/Resume.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import VideoGallery from './components/VideoGallery.jsx';
import GalleryShow from './components/GalleryShow.jsx';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Showreel />
    <Gallery />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white text-black scroll-smooth">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/videos/:type" element={<VideoGallery />} />
          <Route path="/gallery/:id" element={<GalleryShow />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
