import React, { useRef } from "react";
import "./About.scss";
import { motion, useInView } from "framer-motion";
// import about from "/assets/about.png";
import Lottie from "lottie-react";
import aboutSVG from "../../../public/aboutS.json"
// import aboutSVG from "../../../public/aboutSVG.json";
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
        <motion.div
          className="aboutImg"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Lottie
            animationData={aboutSVG}
            className="lottieImg"
          />
        </motion.div>
        <div className="aboutDesc">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I’m Abdelrahman Mostafa Zaki, a passionate Full-Stack Developer with
            a strong academic foundation in Computer Science from El Shorouk
            Academy. My technical expertise includes core computing concepts
            such as data structures, algorithms, database design, operating
            systems, and network security—principles that continue to guide how
            I build scalable, modern web applications.
          </motion.p>
          <br />
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I specialize in the MERN stack (MongoDB, Express.js, React.js, and
            Node.js) along with Firebase, enabling me to deliver full-stack
            solutions that are efficient, responsive, and user-focused. While I
            work across the full stack,
            <br /> I have a strong passion for front-end development—crafting
            clean, accessible, and intuitive interfaces based on modern UI/UX
            best practices.
            <br /> On the back end, I build secure and maintainable APIs,
            applying best practices like input validation, JWT/Firebase
            authentication, and encrypted data handling. I
          </motion.p>
          <br />
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I’m continually exploring new technologies and seeking opportunities
            to contribute to impactful, forward-thinking projects. My focus is
            on delivering fast, scalable applications without compromising user
            experience.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
