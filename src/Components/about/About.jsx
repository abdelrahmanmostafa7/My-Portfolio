import React, { useRef } from "react";
import "./About.scss";
import { motion, useInView } from "framer-motion";
import about from "../../assets/about.png";

const listVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.3 });

  return (
    <motion.div
      className="aboutContainer"
      ref={ref}
      variants={listVariants}
      animate={isInView ? "animate" : "initial"}
    >
      <div className="slogan">
        <h1>Make it Creative, Make it Easy</h1>
      </div>

      <div className="aboutItems">
        <motion.img
          src={about}
          alt="About"
          className="aboutImg"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        />
        <div className="aboutDesc">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I'm Abdelrahman Mostafa Zaki — a passionate Full-Stack Developer
            with a solid academic background in Computer Science. I earned my
            degree from El Shorouk Academy, where I built a strong foundation in
            data structures, algorithms, database design, operating systems, and
            network security. These core principles continue to influence how I
            architect and scale modern web applications.
          </motion.p>
          <br />
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
          >
            My main expertise lies in the MERN stack — MongoDB, Express.js,
            React.js, and Node.js — complemented by Firebase. This tech combo
            allows me to build full-stack applications that are efficient,
            responsive, and user-focused. I have a particular passion for
            front-end development, where I craft clean, accessible, and
            intuitive interfaces that follow modern UI/UX best practices.
          </motion.p>
          <br />

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            On the back end, I focus on creating secure, scalable, and
            maintainable APIs. I apply best practices such as input validation,
            JWT/Firebase authentication, and encrypted data handling. I also
            leverage Firebase tools like Firestore and Realtime Database to
            implement real-time features that are both robust and efficient.
          </motion.p>
          <br />

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1.4 }}
          >
            I’m committed to writing high-performance, maintainable code — from
            optimizing React components and lazy-loading assets to fine-tuning
            database queries and indexing strategies. My goal is always to
            deliver fast, scalable apps without sacrificing user experience.
          </motion.p>
          <br />

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 1.6 }}
          >
            I'm always learning, exploring new tools and technologies, and
            looking for opportunities to contribute to meaningful,
            forward-thinking projects. Let’s build something great together.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
