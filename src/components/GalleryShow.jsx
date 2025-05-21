import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import images from "../data/galleryImages"; 

const GalleryShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialIndex = images.findIndex(img => img.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [shareVisible, setShareVisible] = useState(false);
  const mainImageRef = useRef(null);
  const imageURL = `${window.location.origin}/gallery/${images[currentIndex].id}`;

  // Update image opacity for transition
  useEffect(() => {
    if (!mainImageRef.current) return;
    const img = mainImageRef.current;
    img.classList.add("opacity-0");
    const timeout = setTimeout(() => {
      img.classList.remove("opacity-0");
    }, 300);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // Navigate close (back to gallery main)
  const handleClose = () => {
    navigate("/#gallery");
  };

  // Prev image
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Next image
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Fullscreen
  const handleFullscreen = () => {
    if (mainImageRef.current) {
      const el = mainImageRef.current;
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
    }
  };

  // Copy URL
  const handleCopy = () => {
    navigator.clipboard.writeText(imageURL).then(() => {
      alert("Link copied!");
    });
  };

  return (
    <div className="bg-white text-white min-h-screen flex items-center justify-center relative">
      {/* Top Buttons */}
      <div className="absolute top-4 left-4 flex items-center space-x-4 z-50">
        <button
          onClick={() => setShareVisible(!shareVisible)}
          className="bg-white cursor-pointer text-black hover:bg-gray-600 p-2 rounded"
          aria-label="Share"
        >
          <i className="fas fa-share-alt"></i>
        </button>
        <button
          onClick={handleFullscreen}
          className="bg-white cursor-pointer text-black hover:bg-gray-600 p-2 rounded"
          aria-label="Fullscreen"
        >
          <i className="fas fa-expand"></i>
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute cursor-pointer top-4 right-4 text-black p-2 rounded z-50"
        aria-label="Close"
      >
        <i className="fas fa-times"></i>
      </button>

      {/* Main Image Container */}
      <div className="relative w-full max-w-4xl h-[80vh] flex right-56 items-center justify-center">
       
        
        
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute cursor-pointer left-2 text-black text-4xl z-40"
          aria-label="Previous"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Image */}
        <img
          ref={mainImageRef}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-h-full object-cover max-w-full transition-opacity duration-500"
        />

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute  cursor-pointer right-2 text-black text-4xl z-40"
          aria-label="Next"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        
        
        {/* Image Description */}
      </div>
        <div className="absolute right-0 top-20  transform -translate-x-1/2 text-center text-black   bg-opacity-70 p-4 rounded">
          <h2 className="text-xl font-bold">{images[currentIndex].title}</h2>
          <p>{images[currentIndex].description}</p>
          </div>


      {/* Share Modal */}
      {shareVisible && (
        <div className="fixed w-1/4 h-1/4 top-1/2 flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 rounded shadow-xl z-50">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="text-blue-500" aria-label="Facebook Share">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-blue-400" aria-label="Twitter Share">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-red-500" aria-label="Pinterest Share">
              <i className="fab fa-pinterest fa-lg"></i>
            </a>
            <a href="#" className="text-yellow-500" aria-label="Email Share">
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </div>
          <div className="flex bg-gray-900  items-center space-x-2">
            <input
              type="text"
              readOnly
              value={imageURL}
              className="w-full  text-blue-500 px-2 py-1 rounded "
              aria-label="Image URL"
              onFocus={(e) => e.target.select()}
            />
            <button
              onClick={handleCopy}
              className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryShow;
