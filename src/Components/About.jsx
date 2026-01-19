import React from 'react';
import tehreempic from '../assets/Tp.jfif';

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-600 via-blue-500 to-purple-400 flex flex-col items-center justify-start pt-25 md:pt-32 px-4 md:px-0 text-center space-y-10">

      {/* Section Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white dark:text-gray-200 drop-shadow-lg">
        About Me
      </h1>

      {/* Profile Picture and Intro */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-5xl text-center md:text-left">
        {/* Picture */}
        <img
          src={tehreempic}
          alt="Tehreem Khan"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl"
        />

        {/* Text */}
        <div className="flex flex-col gap-4">
          <p className="text-white dark:text-gray-200 text-lg md:text-xl font-light">
            Hi! I’m <span className="font-semibold">Tehreem Khan</span>, a passionate web developer and lifelong learner. I love exploring the world of technology and building projects that are not only functional but also beautiful and interactive.
          </p>

          <p className="text-white dark:text-gray-200 text-lg md:text-xl font-light">
            Over the past few years, I’ve learned HTML, CSS, JavaScript, React, and TailwindCSS. I enjoy turning ideas into real websites and applications that make a difference. Every project is a chance to learn something new and push my skills further.
          </p>

          <p className="text-white dark:text-gray-200 text-lg md:text-xl font-light">
            Outside of coding, I’m curious about life, exploring new technologies, and always finding ways to improve myself. I’m focused, enthusiastic, and excited about creating solutions that matter.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <a
        href="#projects"
        className="bg-white dark:bg-gray-700 text-purple-700 dark:text-gray-200 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 dark:hover:bg-gray-600 transition-all duration-300"
      >
        See My Projects
      </a>
    </div>
  );
}

export default About;
