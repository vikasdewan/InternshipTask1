import React from "react";

const Contact = () => {
  return (
   <section id="contact" className="bg-white text-black">

   <div className="min-h-screen bg-teal-500 flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-4xl font-bold border-4 border-black px-8 py-4 mb-10">
        GET IN TOUCH!
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 max-w-5xl w-full">
        {/* Contact Info Section */}
        <div className="flex-1 text-black">
          <h3 className="text-xl font-bold mb-4 tracking-widest">CONTACT</h3>
          <p className="mb-2">Agent - AA Management</p>
          <p className="mb-2">500 Terry Francine Street</p>
          <p className="mb-2">San Francisco, CA 94158</p>
          <p className="mb-2">Tel: 123-456-7890</p>
          <p className="mb-4">info@mysite.com</p>
          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-vimeo-v"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex-1 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className="flex-1 border border-black p-2"
              required
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="flex-1 border border-black p-2"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email *"
              className="flex-1 border border-black p-2"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="flex-1 border border-black p-2"
            />
          </div>
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border border-black p-2"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
   </section>
  );
};

export default Contact;
