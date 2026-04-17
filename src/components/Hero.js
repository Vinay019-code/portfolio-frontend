import { motion } from "framer-motion";



export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
    
      <motion.h1 
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
       HI, I'm VINAY YADAV
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-gray-400 text-xl"
      >
       <p className="mt-1px text-white text-2xl"> Full Stack Developer & Data Scientist
       </p>  <br/>
      <p className="text-1.5xl text-gray-400 font-stretch-expanded text-2xl">
        I craft high-performance web applications and intelligent systems that solve real-world problems using MERN, Java, and Python.
        </p>
      </motion.p>

      <motion.button
        
        whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 glow"
      >
       <a href="projects"> Explore My Work</a>
      </motion.button>






      

    </div>
  );
}