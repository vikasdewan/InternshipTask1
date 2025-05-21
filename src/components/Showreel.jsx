// src/components/Showreel.jsx
import React from 'react';
import bgImage from '../assets/images/featuresbg.png';
import { Link } from 'react-router-dom';

const Showreel = () => {
  return (
    <section
      id="showreel"
      className="w-full h-screen    bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col gap-6 w-[80%] max-w-lg mx-auto">
        <Link to='/videos/film' className=" flex justify-center bg-cyan-200 hover:bg-cyan-300 text-black font-bold py-7 px-7 border-4 border-black text-xl tracking-widest transition duration-300">
          FILM
        </Link>
        <Link to='/videos/theater' className="flex justify-center bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-7 px-7 border-4 border-black text-xl tracking-widest transition duration-300">
          THEATER
        </Link>
        <Link to='/videos/commercial' className="flex justify-center bg-teal-700 hover:bg-teal-800 text-black font-bold py-7 px-7 border-4 border-black text-xl tracking-widest transition duration-300">
          COMMERCIAL
        </Link>
      </div>
    </section>
  );
};

export default Showreel;
