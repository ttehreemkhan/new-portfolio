import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-600 via-blue-500 to-purple-400 flex flex-col items-center justify-start pt-32 px-4 md:px-12 text-center space-y-12">

      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
        Get in Touch
      </h1>
      <p className="max-w-2xl text-white text-base md:text-lg font-light">
        I'm always excited to connect! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out using the form below or via my social links.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 md:p-10 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row gap-6 text-white items-center justify-center">
        <div className="flex items-center gap-2"><FaEnvelope /> email@example.com</div>
        <div className="flex items-center gap-2"><FaPhone /> +92 300 0000000</div>
        <div className="flex items-center gap-2"><FaMapMarkerAlt /> Karachi, Pakistan</div>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 text-white text-2xl">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Contact;
