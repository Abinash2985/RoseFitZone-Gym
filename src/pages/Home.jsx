import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-gray-100 px-2 sm:px-4"
      style={{
        backgroundImage:
          "url('https://th.bing.com/th/id/R.d4b3fbc7c8ea4c63c7f9647b02ab1667?rik=e3J92361US9AIw&riu=http%3a%2f%2fwww.borntough.com%2fcdn%2fshop%2farticles%2f10_Best_Barbell_Workouts_for_Biceps_Size_and_Strength.jpg%3fv%3d1662389101&ehk=vF3MHz3vUGBdSogc5W52vgsRzKNbaB9Vze9U%2bfO1wuU%3d&risl=&pid=ImgRaw&r=0')",
      }}
    >
      {/* Gradient Overlay with blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 opacity-80 backdrop-blur-sm"></div>

      {/* Flex container for content and video */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl py-10 md:py-20 gap-8">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Achieve Your{" "}
            <span className="text-green-200">Fitness Goals</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-base sm:text-lg md:text-2xl font-medium mb-6"
          >
            Join{" "}
            <span className="text-blue-200 font-semibold">
              RoseFitZone Gym
            </span>{" "}
            Today
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-semibold text-lg"
            onClick={() => navigate("/about")}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Video on the right */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-[400px] md:max-w-[500px] rounded-xl overflow-hidden border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur">
            <video
              src="/gym.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 sm:h-64 md:h-96 object-cover"
              style={{ background: "#222" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}