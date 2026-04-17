import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 stickey  pt-5 pb-6 px-6 md:px-20">
      
      {/* Top Section */} 
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        
        {/* Brand
        {/* <div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Vinay Yadav
          </h2>
          <p className="text-xl leading-6">
            Building scalable web apps, intelligent systems, and modern
            digital experiences using MERN, Java & Python.
          </p>
        </div> */}

        {/* Quick Links */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-xl">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-blue-400 transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services / Skills */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-4">
            Skills
          </h3>
          <ul className="space-y-2 cursor-pointer text-xl">
            <li className="hover:text-blue-400 transition">MERN Stack</li>
            <li className="hover:text-blue-400 transition">Java Backend</li>
            <li className="hover:text-blue-400 transition">Python & Data Science</li>
            <li className="hover:text-blue-400 transition">API Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-xl mb-3">vinay@example.com</p>
          <p className="text-xl mb-4">Open for freelance & internships</p>

          {/* Social Icons */}
          <div className="flex space-x-4  text-3xl">
            <a href="https://github.com/Vinay019-code" className="hover:text-blue-400  transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vinay-yadav-617363335" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.linkedin.com/in/vinay-yadav-617363335" className="hover:text-blue-400 transition">
               <FaInstagram/>
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="hover:text-blue-400 transition">
              <FaEnvelope />
              
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Vinay Yadav. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;