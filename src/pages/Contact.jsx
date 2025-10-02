import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ln608ut', 'template_thp1x0p', form.current, '2tORGJi4qNmFO22TG')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form method="POST" ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto px-4 py-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h2>
        <motion.div
          className="space-y-4 bg-gradient-to-r from-red-100 to-yellow-100 p-6 rounded-lg shadow-lg w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <input
            type="text"
            placeholder="Name"
            name="title"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="w-full p-2 border border-gray-300 rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-600 hover:scale-105 transition-all duration-300 text-lg"
          >
            Send
          </button>
        </motion.div>
      </div>
    </form>
  );
}

export default Contact;