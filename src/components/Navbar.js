import { motion } from "framer-motion";
import ThreeBackground from "./ThreeBackground";
import Background from "./Background";
import { Link } from "react-router-dom";




export default function Navbar() {
  return (
    <>
   <Background />
      <ThreeBackground />
      
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full flex justify-center z-50"
    >

      <nav className="glass px-6 py-3 mt-10 rounded-full ">
       <div className=" flex gap-6  ">

        <Link to="/" className="hover:text-gray-300 transition">Home</Link>
        <Link to="/about" className="hover:text-gray-300 transition">About</Link>
        <Link to="/learnings" className="hover:text-gray-300 transition">Learning</Link>
        <Link to="/projects" className="hover:text-gray-300 transition">Projects</Link>
        <Link  to="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>
        
      </nav>
    </motion.div>
     </>
  );
}

/* <a href="#about" ">About</a>
        <a href="#learning" className="">Learning</a>
        <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
        <a href="#contact" className="hover:text-gray-300 transition">Contact</a> */

         /*  import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-6 p-4 bg-black text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/learnings">Learnings</Link>
    </nav>
  );
};*/