import React from 'react';

// Replace these imports with your actual project images
import project1 from '../assets/foodapp.png';
import project2 from '../assets/cofee.png';
import project3 from '../assets/calculator.png';
import project4 from '../assets/new.png';
import project5 from '../assets/signup.png';
import project6 from '../assets/todo.png';

const projects = [
  {
    title: "Food Ordering App",
    img: project1,
    desc: "A responsive Food Ordering App built with React. Users can browse menus, add items to the cart, and place orders with an intuitive interface."
  },
  {
    title: "Coffee Shop Website",
    img: project2,
    desc: "A beautiful Coffee Shop website designed using HTML, CSS, and JavaScript. Features include a menu, gallery, and smooth animations for better user experience."
  },
  {
    title: "Calculator App",
    img: project3,
    desc: "A fully functional Calculator built with JavaScript and React, capable of performing basic arithmetic operations with a clean and interactive UI."
  },
  {
    title: "News Blog Platform",
    img: project4,
    desc: "A blog platform where users can read and post news articles. Built with React and styled with TailwindCSS to ensure a modern and responsive layout."
  },
  {
    title: "Sign-Up Form Project",
    img: project5,
    desc: "A user registration form built with HTML, CSS, and JavaScript. Includes validation, responsive design, and interactive form elements."
  },
  {
    title: "Todo List App",
    img: project6,
    desc: "A dynamic Todo List application developed with React. Users can add, edit, and delete tasks, with all changes reflected in real-time."
  },
];

function Work() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-600 via-blue-500 to-purple-400 flex flex-col items-center justify-start pt-24 md:pt-32 px-4 md:px-12 text-center space-y-12">

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white dark:text-gray-200 drop-shadow-lg">
        My Projects
      </h1>
      <p className="max-w-3xl text-white dark:text-gray-300 text-base md:text-lg font-light">
        These are some of the projects I have developed. Each showcases my skills in front-end development, responsive design, and interactive applications.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-500"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded-lg"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 w-full h-full flex flex-col justify-end bg-gradient-to-t from-purple-800/70 to-transparent dark:from-gray-900/70 dark:to-transparent text-white p-3 sm:p-4 transition-all duration-300">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold">{project.title}</h2>
              <p className="text-xs sm:text-sm md:text-sm mt-2">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
