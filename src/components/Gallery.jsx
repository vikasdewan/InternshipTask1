import React from "react";
// import { useNavigate } from "react-router-dom";
import images from "../data/galleryImages"; // Adjust path based on your folder structure
import { useNavigate } from "react-router-dom";

const Gallery = () => {
   const navigate = useNavigate();
 
    const handleClick = (index) => {
  const imgId = images[index].id;
  navigate(`/gallery/${imgId}`);
};
 

  return (
    <section id="gallery" className="  bg-gray-100 px-4 md:px-10 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {images.map((img, index) => (
          <div
            key={img.id}
            className="relative group w-full h-96 overflow-hidden cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-50 flex items-center justify-center transition-opacity duration-300 z-10">
              <div className="flex flex-col items-center text-center px-4 ">
                <p className="text-white text-4xl opacity-100 font-extrabold tracking-widest">
                  {img.title || "Image Title"}
                </p>
                <span className="text-white p-4 text-sm">
                  {img.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
