// src/components/About.jsx
import React from 'react';
import aboutImg from '../assets/images/aboutImg.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="w-full min-h-full bg-teal-500 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 gap-10">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={aboutImg}
          alt="About"
          className="max-w-sm md:max-w-md object-cover shadow-lg"
        />
      </div>

      {/* Right: Text content */}
      <div className="w-full md:w-1/2 text-center md:text-left text-black">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">ABOUT ME!</h2>
        <p className="text-base mb-4">
          I'm a paragraph. Click here to add your own text and edit me. I’m a great place for
          you to tell a story and let your users know a little more about you.
        </p>
        <p className="text-base mb-6">
          This is a great space to write long text about your company and your services. You can
          use this space to go into a little more detail about your company. Talk about your
          team and what services you provide.
        </p>
        <Link to="/resume">
        <button className="bg-black cursor-pointer text-white px-6 py-2 text-sm tracking-wider hover:bg-gray-800 transition">
          See Resume
        </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
