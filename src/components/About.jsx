import { motion } from "framer-motion";
import profileImg from "../assets/sk.jpg";

const About = () => {
  return (
    <section className="py-20 bg-black px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-6xl font-extrabold text-center mb-16 text-white drop-shadow-[2px_2px_8px_rgba(128,0,255,0.7)]"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile */}
          <motion.div
            whileHover={{
              rotateY: 25,
              rotateX: 15,
              scale: 1.2,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="flex justify-center perspective-1000"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.img
              src={profileImg}
              alt="Sumit Kumar"
              whileHover={{ scale: 1.15, rotateY: 15, rotateX: 10 }}
              className="w-full max-w-md h-auto rounded-3xl shadow-3xl object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="text-gray-300">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sumit Kumar
            </h3>
            <p className="text-2xl md:text-3xl mb-8">
              Enthusiastic IT postgraduate seeking an entry-level role to apply
              technical skills and problem-solving abilities. Eager to develop
              expertise in software development and IT solutions.
            </p>

            {/* Education */}
            <div className="mb-10">
              <h4 className="font-bold text-white mb-3 text-2xl">Education</h4>
              <ul className="space-y-3 text-gray-300 text-xl md:text-2xl">
                <li>• MCA: IIMT College of Engineering, Greater Noida (2023-2025)</li>
                <li>• BSc Mathematics: Hindu College, Moradabad (2019-2023)</li>
                <li>• Intermediate: R.R.K School Moradabad (2018-2019)</li>
                <li>• High School: R.R.K School Moradabad (2016-2017)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
