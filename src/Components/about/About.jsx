import React from "react";
import "./About.scss";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import about from "../../assets/about.png";

const listVariants = {
  initial: {
    y: -100,
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
  const isInView = useInView(ref);

  return (
    <motion.div
      className="aboutContainer"
      ref={ref}
      variants={listVariants}
      animate={isInView ? "animate" : "initial"}
    >
      <div className="slogan">
        <h1>Make it Create , Make it easy</h1>
      </div>
      <div className="aboutItems">
        <img src={about} alt="" className="aboutImg" />

        <div className="aboutItem">
          <h2>Education</h2>
          <p>Graduation from El-Shourok Academy , major of computer science</p>
          <br />
          <h2>Web Designer</h2>
          <p>
            I specialize in creating intuitive and visually appealing web
            designs that enhance user experience.
          </p>
          <br />

          <h2>Frontend Developer</h2>
          <p>
            I am a frontend developer with a passion for building beautiful and
            functional UI
          </p>
          <br />

          <h2>Backend Developer</h2>
          <p>
            I develop robust and scalable backend systems to ensure seamless
            application performance.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
