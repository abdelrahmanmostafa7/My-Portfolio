import React from "react";
import "./Skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SkillsData from "../../data/SkillsData";

//h1 animation 
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
// Bubble entry animation
const bubbleVariant = (x, y) => ({
  initial: {
    x,
    y,
    opacity: 0,
    scale: 0.1,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
});

// Floating animations
const floatingAnimation1 = {
  y: [0, -7, 0, 7, 0],
  x: [0, -7, 0, 7, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const floatingAnimation2 = {
  y: [0, 7, 0, -7, 0],
  x: [0, 7, 0, -7, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <motion.div
      className="skillsContainer"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div
        className="slogan"
        variants={listVariants}
        animate={isInView ? "animate" : "initial"}
      >
        <h1>How I Can Contribute, My Skills</h1>
      </motion.div>
      <div className="skillsIcons">
        {SkillsData.map((icon, index) => {
          const randomX = Math.floor(Math.random() * 400 - 200);
          const randomY = Math.floor(Math.random() * 400 - 200);
          const floatAnim =
            Math.random() > 0.5 ? floatingAnimation1 : floatingAnimation2;

          return (
            <motion.img
              key={index}
              src={icon.src}
              alt={icon.alt}
              variants={bubbleVariant(randomX, randomY)}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="skillIcon"
              whileHover={{ scale: 1.1 }}
              whileInView={floatAnim}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
