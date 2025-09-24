import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ef8ytjz", "template_o2i1swg", form.current, {
        publicKey: "X5lAVIVNBeHqQtEva",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 🌌 Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-600/40 blur-3xl"
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-pink-600/30 blur-3xl"
        animate={{ y: [0, -50, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-8xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              Let’s talk about your project
            </h3>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              I’m available for freelance work and full-time opportunities. Reach out if you’d like to collaborate on something exciting — big or small.
            </p>

            <div className="space-y-8">
              {[
                { icon: <FiMail className="text-purple-400 text-2xl mr-4" />, text: "skumar21082001@gmail.com" },
                { icon: <FiPhone className="text-purple-400 text-2xl mr-4" />, text: "+91 9528865099" },
                { icon: <FiMapPin className="text-purple-400 text-2xl mr-4" />, text: "Moradabad, Uttar Pradesh - 244001" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex items-center text-2xl text-gray-200"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ rotateY: -10, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-8 bg-gray-900/60 backdrop-blur-xl p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-800"
            >
              {/* Name */}
              <div>
                <label htmlFor="user_name" className="block text-2xl font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="w-full px-6 py-4 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-2xl text-white"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="user_email" className="block text-2xl font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="w-full px-6 py-4 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-2xl text-white"
                  placeholder="Your email"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-2xl font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-6 py-4 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-2xl text-white"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168,85,247,0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-2xl text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
