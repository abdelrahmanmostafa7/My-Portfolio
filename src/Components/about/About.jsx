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
        <div className="aboutImg">
          <motion.img
            src={about}
            alt="About"
            className="aboutImg"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
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
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I'm a MERN stack web developer specializing in MongoDB, Express.js,
            React.js, and Node.js — complemented by Firebase. This powerful tech
            stack enables me to build full-stack applications that are
            efficient, responsive, and user-focused.
            <br /> I have a strong passion for front-end development, where I
            create clean, accessible, and intuitive interfaces that align with
            modern UI/UX best practices. I'm also dedicated to writing
            high-performance, maintainable code, optimizing components,
            lazy-loading assets, and ensuring smooth user experiences.
            <br /> On the back end, I focus on building secure, scalable, and
            maintainable APIs. I follow best practices such as input validation,
            JWT/Firebase authentication, and encrypted data handling to ensure
            robustness and reliability across the application.
          </motion.p>
          <br />
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I'm always learning, exploring new tools and technologies, and
            seeking opportunities to contribute to meaningful, forward-thinking
            projects. My goal is to deliver fast, scalable apps without
            compromising on user experience. Let’s build something great
            together.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
