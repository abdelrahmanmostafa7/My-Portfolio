import React from "react";
import "./Skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import react from "/assets/react.png";
import css from "/assets/css.png";
import git from "/assets/git.png";
import figma from "/assets/figma.png";
import html from "/assets/html.png";
import javascript from "/assets/javascript.png";
import mu5 from "/assets/mu5.png";
import node from "/assets/node.png";
import redux from "/assets/redux.png";
import sass from "/assets/sass.png";
import typescript from "/assets/typescript.png";
import framer from "/assets/framer.png";
import next from "/assets/next.png";
import mongo from "/assets/mongo.png";
import firebase from "/assets/firebase.png";
import express from "/assets/express.png";
import tailwind from "/assets/tailwind.png";
import three from "/assets/three.png";

const icons = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: sass, alt: "Sass" },
  { src: javascript, alt: "JavaScript" },
  { src: typescript, alt: "TypeScript" },
  { src: react, alt: "React" },
  { src: next, alt: "Next.js" },
  { src: mu5, alt: "Material UI 5" },
  { src: three, alt: "Three.js" },
  { src: redux, alt: "Redux" },
  { src: framer, alt: "Framer Motion" },
  { src: figma, alt: "Figma" },
  { src: git, alt: "Git" },
  { src: node, alt: "Node.js" },
  { src: express, alt: "Express.js" },
  { src: mongo, alt: "MongoDB" },
  { src: firebase, alt: "Firebase" },
];

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
        {icons.map((icon, index) => {
          const randomX = Math.floor(Math.random() * 400 - 200);
          const randomY = Math.floor(Math.random() * 400 - 200);
          const floatAnim =
            Math.random() > 0.5 ? floatingAnimation1 : floatingAnimation2;

          return (
            <a href="#experience">
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
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
