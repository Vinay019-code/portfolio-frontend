// import React from 'react'

// const About = () => {
//   return (
//     <div className='h-screen'>
//         About
//         </div>
//   )
// }

// export default About



import { FaCode, FaDatabase, FaBrain } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen mt-32  text-white px-6 md:px-20 py-12">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        About Me 👨‍💻
      </h1>

      {/* Intro */}
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-7">
        I'm Vinay Yadav, a passionate Full Stack Developer and Data Science enthusiast.
        I love building scalable web applications and solving real-world problems
        using modern technologies like MERN, Java, and Python.
      </p>

      {/* Journey Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">My Journey 🚀</h2>
        <p className="text-gray-300 leading-7">
          My journey started with curiosity about how websites and applications work.
          Over time, I developed strong skills in full stack development using the MERN stack,
          along with backend development in Java and Python.  
          <br /><br />
          I also explored Data Structures & Algorithms to strengthen my problem-solving abilities
          and stepped into Data Science to build intelligent, data-driven solutions.
          <br /><br />
          I continuously learn and improve, focusing on writing clean, efficient, and scalable code.
        </p>
      </div>

      {/* Skills Summary */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Skills Summary 🛠️</h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Frontend */}
          <div className="bg-[#0f172a] p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition">
            <FaCode className="text-3xl text-blue-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <p className="text-sm text-gray-400">
              React, JavaScript, HTML, CSS, Tailwind — building responsive and modern UI.
            </p>
          </div>

          {/* Backend */}
          <div className="bg-[#0f172a] p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition">
            <FaDatabase className="text-3xl text-blue-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Backend</h3>
            <p className="text-sm text-gray-400">
              Node.js, Express, Java, MongoDB — creating scalable APIs and systems.
            </p>
          </div>

          {/* Data Science */}
          <div className="bg-[#0f172a] p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition">
            <FaBrain className="text-3xl text-blue-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Data Science</h3>
            <p className="text-sm text-gray-400">
              Python, data analysis, and problem-solving with real-world datasets.
            </p>
          </div>

        </div>
      </div>

      {/* Goals Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">My Goals 🎯</h2>
        <p className="text-gray-300 leading-7">
          My goal is to become a highly skilled Full Stack Developer and Data Scientist,
          building impactful digital products that solve real-world problems.
          <br /><br />
          I aim to work on innovative projects, contribute to open source, and continuously
          grow in the field of software development and AI.
        </p>
      </div>

    </div>
  );
};

export default About;