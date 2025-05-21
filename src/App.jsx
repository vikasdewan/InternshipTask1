// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showreel from './components/Showreel';
import Gallery from './components/Gallery';
import Contact from './components/contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import ScrollToTop from './components/ScrollToTop';
import VideoGallery from './components/VideoGallery';
import GalleryShow from './components/GalleryShow';

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
