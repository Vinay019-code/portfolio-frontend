// import {
//   FaJava,
//   FaPython,
//   FaReact,
//   FaNodeJs,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiJavascript,
// } from "react-icons/si";

// import { useState } from "react";

// const skills = [
//   { name: "Java", icon: <FaJava /> },
//   { name: "Python", icon: <FaPython /> },
//   { name: "JavaScript", icon: <SiJavascript /> },
//   { name: "React", icon: <FaReact /> },
//   { name: "Node.js", icon: <FaNodeJs /> },
//   { name: "MongoDB", icon: <SiMongodb /> },
//   { name: "DSA", icon: "📊" },
// ];

// const certificates = [
//   {
//     title: "Java Programming Certificate",
//     image: "/assets/certificates/java.png",
//   },
//   {
//     title: "Python Data Science Certificate",
//     image: "/assets/certificates/python.png",
//   },
//   {
//     title: "MERN Stack Certificate",
//     image: "/assets/certificates/mern.png",
//   },
// ];

// const Learnings = () => {
//   const [selectedCert, setSelectedCert] = useState(null);

//   return (
//     <div className="min-h-screen  text-white px-6 md:px-20 py-12">
      
//       {/* Heading */}
//       <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
//         My Learnings
//       </h1>
//       <p className="text-gray-400 text-center mb-12">
//         Technologies, tools, and skills I’ve mastered over time.
//       </p>

//       {/* Skills Section */}
//       <div className="mb-16">
//         <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>

//         <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-[#1e293b] p-6 rounded-xl flex flex-col items-center justify-center 
//               hover:scale-105 hover:bg-[#334155] transition duration-300 cursor-pointer glass"
//             >
//               <div className="text-4xl mb-3 text-blue-400">
//                 {skill.icon}
//               </div>
//               <p className="text-sm">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Certificates Section */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-6">Certificates</h2>

//         <div className=" grid md:grid-cols-3 gap-6">
//           {certificates.map((cert, index) => (
//             <div
//               key={index}
//               className="bg-[#1e293b] rounded-xl overflow-hidden cursor-pointer 
//               hover:scale-105 transition duration-300 glass"
//               onClick={() => setSelectedCert(cert.image)}
//             >
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <p className="text-sm text-center">{cert.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal (Image Preview) */}
//       {selectedCert && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           onClick={() => setSelectedCert(null)}
//         >
//           <img
//             src={selectedCert}
//             alt="Certificate"
//             className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Learnings;

import { useState } from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

const skillsData = [
  { name: "React", icon:<FaReact /> , level: 85, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript />, level: 90, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, level: 80, category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, level: 75, category: "Backend" },
  { name: "Java", icon: <FaJava />, level: 85, category: "Core" },
  { name: "Python", icon: <FaPython />, level: 80, category: "AI" },
  { name: "DSA", icon: "📊", level: 78, category: "Core" },
];

const certificates = [
  {
    title: "Java Certificate",
    image: "/assets/certificates/java.png",
    link: "#",
  },
  {
    title: "Python Data Science",
    image: "/assets/certificates/python.png",
    link: "#",
  },
  {
    title: "MERN Stack",
    image: "/assets/certificates/mern.png",
    link: "#",
  },
];

const categories = ["All", "Frontend", "Backend", "AI", "Core"];

const Learnings = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <div className="min-h-screen text-white px-6 md:px-20 py-12 pb-48 mt-32 text-2xl ">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        My Learnings 🚀
      </h1>
      <p className="text-gray-400 text-center mb-10">
        A journey of technologies, problem solving & continuous growth.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap text-3xl justify-center gap-3  mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xl transition  ${
              activeCategory === cat
                ? "bg-blue-500 text-white"
                : "bg-[#1e293b] hover:bg-blue-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Section */}
      <div className="grid md:grid-cols-6 gap-12 mb-16 h-fit w-fit place-self-center mt-20">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#0f172a] p-5  glass rounded-xl  hover:shadow-lg hover:shadow-blue-500/20 transition"
          >
            <div className="flex items-center justify-between mb-2 ">
              <div className="flex items-center gap-3 ">
                <span className=" text-7xl">
                  {skill.icon}
                </span>
                {skill.name}
              </div>
              {/* <span className="text-sm text-gray-400">
                {skill.level}%
              </span> */}
            </div>

            {/* Progress Bar */}
            {/* <div className="w-full h-2 bg-gray-700 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div> */}
          </div>
        ))}
      </div>

      {/* Certificates */}
      <div className="mt-40">
        <h2 className="text-5xl font-bold mb-6 flex items-center justify-center">
          Certificates 🎓
        </h2>

        <div className="grid  md:grid-cols-3 gap-6 mt-20">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#0f172a] glass rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition"
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-52 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                  
                  <button
                    onClick={() => setSelectedCert(cert.image)}
                    className="bg-blue-500 px-3 py-1 rounded text-xl"
                  >
                    View
                  </button>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black px-3 py-1 rounded text-xl flex items-center gap-1"
                  >
                    Verify <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>

              <div className="p-4 text-center text-xl">
                {cert.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <img
            src={selectedCert}
            alt="certificate"
            className="max-w-[90%] max-h-[80%] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Learnings;