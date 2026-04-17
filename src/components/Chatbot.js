import { useState } from "react";
import { motion } from "framer-motion";
import { GoArrowRight  } from "react-icons/go";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  // Dummy replies (no backend needed)
  const getReply = (message) => {
    message = message.toLowerCase();

    if (message.includes("project")) {
      return "I have built Weather App, Travel Planner and Chat App 🚀";
    }
    if (message.includes("skills")) {
      return "React, Node, Express, MongoDB, Java, Spring Boot 💻";
    }
    return "Ask me about my projects or skills 😊";
  };

  const send = () => {
    if (!msg.trim()) return;

    const reply = getReply(msg);

    setChat([...chat, { user: msg, bot: reply }]);
    setMsg("");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg"
      >
        💬
      </motion.button>

      {/* Chat Window */}
      {open && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-20 right-5 w-80 glass rounded-xl p-4"
        >
          <h3 className="mb-2 font-bold">Ask Me 👇</h3>

          {/* Chat Messages */}
          <div className="h-60 overflow-y-auto space-y-2 mb-3">
            {chat.map((c, i) => (
              <div key={i}>
                <div className="text-right">
                  <span className="bg-blue-500 px-3 py-1 rounded text-sm">
                    {c.user}
                  </span>
                </div>

                <div className="text-left mt-1">
                  <span className="bg-gray-700 px-3 py-1 rounded text-sm">
                    {c.bot}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex ">
            <div className=""> 
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="flex-1  rounded bg-white/10 outline-none"
              placeholder="Ask something..."

              
            />
            <button
              onClick={send}
              className="bg-white text-black px-3 rounded"
            >
              <GoArrowRight  className="h-6 w-5"/>
             {/* <FontAwesomeIcon icon={byPrefixAndName.fas['arrow-right']} style={{color: "rgb(116, 192, 252)",}} /> */}
            </button>
          </div>
          </div>
        </motion.div>
      )}
    </>
  );
}