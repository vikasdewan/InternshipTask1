 import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import videosData from '../data/videos.js';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';

const VideoGallery = () => {
  const { type } = useParams();
  const content = videosData[type] || videosData['film'];
  const [mainVideo, setMainVideo] = useState(content.videos[0]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');

  const filteredVideos = content.videos.filter(
    (video) =>
      (category === 'All Categories' || video.category === category) &&
      video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-teal-400 flex flex-col items-center justify-center px-4 text-center">
        <div className="w-full pt-10 max-w-6xl mx-auto flex justify-start">
          <Link to="/" className="text-3xl"> <ArrowLeft/></Link>
        </div>
        <div className="border-8 mt-5 border-black px-40 py-7 mb-12">
          <h1 className="text-5xl font-extrabold tracking-widest">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </h1>
        </div>
        <p className="text-sm max-w-xl mx-auto leading-relaxed">
          {content.description}
        </p>

        <h1 className="text-center text-black text-3xl font-extrabold py-10 tracking-widest uppercase">
          {content.title}
        </h1>

        <div className="flex justify-center mb-10">
          {mainVideo && (
            <iframe
              width="900"
              height="500"
              src={mainVideo.src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="flex justify-around text-black font-bold gap-10 items-center mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search video..."
              className="px-4 py-2 pl-10 rounded bg-teal-400 placeholder-black focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute left-3 top-2.5">🔍</span>
          </div>
          <select
            className="bg-teal-400 px-4 py-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All Categories</option>
            {[...new Set(content.videos.map((v) => v.category))].map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-center gap-6 flex-wrap px-6 mb-10">
          {filteredVideos.map((video, idx) => (
            <div
              key={idx}
              onClick={() => setMainVideo(video)}
              className="relative w-72 cursor-pointer group"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                className="rounded w-full h-44 object-cover"
                alt={video.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex items-center justify-center">
                <button className="bg-white text-black px-4 py-1 rounded">
                  ▶ Play Video
                </button>
              </div>
              <p className="absolute top-2 left-2 text-sm bg-black bg-opacity-60 px-2 py-1 rounded">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default VideoGallery;
