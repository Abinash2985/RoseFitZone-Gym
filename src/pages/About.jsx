import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          About RoseFitZone Gym
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-center"
        >
          Founded in 2015, RoseFitZone Gym began as a small community space with a big dream: to empower every individual to achieve their best self. Over the years, we've grown into a vibrant fitness hub, welcoming members from all walks of life.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="mb-4">
              To inspire and support our members on their fitness journey by providing top-notch facilities, expert guidance, and a motivating environment.
            </p>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Inclusivity & Community</li>
              <li>Integrity & Respect</li>
              <li>Continuous Growth</li>
              <li>Wellness for All</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Meet the Team</h3>
            <div className="mb-4">
              <span className="font-bold">Alex Rose</span> – Founder & Head Trainer<br />
              With over 15 years in the fitness industry, Alex’s passion is helping others transform their lives. His vision built RoseFitZone into the supportive community it is today.
            </div>
            <div>
              <span className="font-bold">Our Trainers:</span>
              <ul className="list-disc list-inside ml-4">
                <li><b>Priya Sharma</b> – Yoga & Wellness Coach</li>
                <li><b>John Carter</b> – HIIT & Strength Specialist</li>
                <li><b>Sophia Lee</b> – Nutrition & Lifestyle Expert</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}