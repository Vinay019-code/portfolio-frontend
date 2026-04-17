import { motion } from "framer-motion";

const projects = [
  {
    name: "Weather App",
    desc: "Real-time weather using API"
  },
  {
    name: "Travel Planner",
    desc: "Plan trips smartly"
  },
  {
    name: "Chat App",
    desc: "Real-time messaging system"
  }
];

export default function Projects() {
  return (
    <div id="projects" className="pt-48 h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 h-60 m-5">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="glass p-6 rounded-xl cursor-pointer transition-all"
          >
            <h3 className="text-3xl font-bold ">{p.name}</h3>
            <p className="text-gray-400 text-2xl mt-2">{p.desc}</p>

            <div className="mt-32 flex gap-6 justify-end">
              <button className="px-8 py-1  bg-white text-black text-2xl rounded-3xl">Live</button>
              <button className="px-8 py-1 border  rounded-3xl">GitHub</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}