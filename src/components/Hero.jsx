// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/images/herobg.png'; // Update path if needed

const Hero = () => {
  return (
    <section id="hero">
  <div class="relative w-full h-screen bg-[url('./assets/images/herobg.png')] bg-cover bg-center flex items-center justify-center">
    
     
    <div class="absolute inset-0 bg-black opacity-20"></div>

    
    <div class="relative flex flex-col items-center justify-center text-center z-10">
      <p class="text-white text-6xl font-bold tracking-widest">JOHN K. HOLTE</p>
      <span class="text-white text-lg tracking-wide">Actor & Model</span>
    </div>

  </div>
</section>
  );
};

export default Hero;
