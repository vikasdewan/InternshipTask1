import React from "react";
import resumeData from "../data/resumeData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // optional icon package

const Resume = () => {
  const { aboutMe, workExperience, workshops, specialSkills, resumeLink } = resumeData;

  return (
    <>
      <Navbar />

      <section className=" min-h-screen bg-teal-400 flex flex-col items-center justify-center px-4 text-center">
        {/* Back Arrow */}
        <div className="w-full pt-10 max-w-6xl mx-auto flex justify-start">
          <Link to="/" className="text-3xl">
            <ArrowLeft />
          </Link>
        </div>

        {/* Resume Heading */}
        <div className="border-8 mt-5 border-black px-10 md:px-64 py-7 mb-12">
          <h1 className="text-5xl font-extrabold tracking-widest">RESUME</h1>
        </div>

        {/* About Me */}
        <div className="max-w-3xl mx-auto text-black">
          <h2 className="text-xl font-bold tracking-widest mb-6">ABOUT ME</h2>
          <p className="text-base mb-4">
            Height: {aboutMe.height} &nbsp; | &nbsp; Eye Color: {aboutMe.eyeColor} &nbsp; | &nbsp; Hair Color: {aboutMe.hairColor}
          </p>
          <p className="text-sm leading-relaxed">{aboutMe.bio}</p>
        </div>

        <hr className="my-8 border-t-2 border-black w-1/2 mx-auto" />

        {/* Work Experience */}
        <div className="py-16 px-8 text-black">
          <h2 className="text-3xl font-extrabold text-center tracking-widest mb-12">WORK EXPERIENCE</h2>
          <div className="space-y-12 max-w-5xl mx-auto">
            {["theater", "film"].map((section) => (
              <div key={section}>
                <h3 className="text-xl font-semibold mb-4 capitalize">{section}</h3>
                {workExperience[section].map((item, index) => (
                  <p key={index} className="flex flex-wrap gap-x-4">
                    <span>{item.company}</span> | <span>{item.project}</span> | <span>{item.year}</span> | <span>{item.role}</span>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <hr className="my-8 border-t-2 border-black w-1/2 mx-auto" />

        {/* Training & Workshops */}
        <div className="py-16 px-8 text-black">
          <h2 className="text-3xl font-extrabold text-center tracking-widest mb-12">TRAINING & WORKSHOPS</h2>
          <div className="space-y-2 max-w-2xl mx-auto">
            {workshops.map((ws, index) => (
              <p key={index} className="flex justify-center flex-wrap gap-x-4">
                <span>{ws.institution}</span> | <span>{ws.name}</span> | <span>{ws.instructor}</span>
              </p>
            ))}
          </div>
        </div>

        <hr className="my-8 border-t-2 border-black w-3xl mx-auto" />

        {/* Special Skills */}
        <div className="py-16 px-8 text-black">
          <h2 className="text-3xl font-extrabold text-center tracking-widest mb-12">SPECIAL SKILLS</h2>
          <div className="space-y-2 max-w-2xl mx-auto">
            {specialSkills.map((skill, index) => (
              <p key={index} className="text-center">{skill}</p>
            ))}
          </div>
        </div>

        <hr className="my-8 border-t-2 border-black w-3xl mx-auto" />

        {/* Resume Download */}
        <div className="py-16 px-8 text-black">
          <h2 className="text-3xl font-extrabold text-center tracking-widest mb-12">DOWNLOAD FULL RESUME</h2>
          <div className="space-y-2 max-w-2xl mx-auto">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <span className="text-white bg-black py-2 px-8 rounded-sm">Download</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Resume;
