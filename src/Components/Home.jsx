import React from 'react';
import tehreempic from '../assets/Tp.jfif';

function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-600 via-blue-500 to-purple-400 flex flex-col items-center justify-start pt-25 md:pt-32 px-4 md:px-0 text-center space-y-10">

      {/* Welcome Text */}
      <h1 className="text-white text-5xl md:text-6xl font-extrabold animate-pulse drop-shadow-lg">
        Welcome to My Portfolio
      </h1>

      {/* Name + Picture */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <h2 className="text-white text-3xl md:text-4xl font-semibold drop-shadow-md">
          Hi, My Name Is Tehreem Khan
        </h2>
        <img
          src={tehreempic}
          alt="Tehreem Khan"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-xl transition-transform transform hover:scale-110"
        />
      </div>

      {/* About Me Text */}
      <p className="max-w-xl text-white text-lg md:text-xl font-light animate-fadeIn">
        I am a passionate web developer focused on building beautiful, responsive, and interactive websites. I love learning new technologies and creating projects that make a difference.
      </p>

      {/* Call to Action Button */}
      <a
        href="#projects"
        className="bg-white text-purple-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300"
      >
        View My Work
      </a>

    </div>
  );
}

export default Home;
