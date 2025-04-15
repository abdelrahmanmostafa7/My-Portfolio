import React from "react";
import "./About.scss";
import about1 from "../../assets/about01.png";
import about2 from "../../assets/about02.png";
import about3 from "../../assets/about03.png";
import about4 from "../../assets/about04.png";
import { motion, useInView } from "motion/react";
import { useRef } from "react";



const listVariants = {
  initial: {
    y: -150,
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
        <div className="aboutItem">
          <img src={about2} alt="" className="aboutImg" />
          <h3>Education</h3>
          <p>
           Graduation from El-Shourok Academy , major of computer science
          </p>
        </div>
        <div className="aboutItem">
          <img src={about3} alt="" className="aboutImg" />
          <h3>Web Designer</h3>
          <p>
            I specialize in creating intuitive and visually appealing web designs that enhance user experience.
          </p>
        </div>
        <div className="aboutItem">
          <img src={about1} alt="" className="aboutImg" />
          <h3>Frontend Developer</h3>
          <p>
           I am a frontend developer with a passion for building beautiful and functional UI
          </p>
        </div>
        <div className="aboutItem">
          <img src={about4} alt="" className="aboutImg" />
          <h3>Backend Developer</h3>
          <p>
            I develop robust and scalable backend systems to ensure seamless application performance.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

