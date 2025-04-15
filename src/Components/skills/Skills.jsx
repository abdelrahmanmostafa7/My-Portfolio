import React from "react";
import "./Skills.scss";
import react from "../../assets/react.png";
import css from "../../assets/css.png";
import git from "../../assets/git.png";
import figma from "../../assets/figma.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import mu5 from "../../assets/mu5.png";
import node from "../../assets/node.png";
import redux from "../../assets/redux.png";
import sass from "../../assets/sass.png";
import typescript from "../../assets/typescript.png";
import framer from "../../assets/framer.png";
import next from "../../assets/next.png";
import mongo from "../../assets/mongo.png";
import firebase from "../../assets/firebase.png";
import express from "../../assets/express.png";
import tailwind from "../../assets/tailwind.png";
import three from "../../assets/three.png";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

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

const shakeAnimation = {
  animate: {
    x: [0, 3, -3, 3, -3, 0],
    y: [0, -3, 3, -3, 3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const shakeAnimation1 = {
  animate: {
    x: [0, -3, 3, -3, 3, 0],
    y: [0, 4, -3, 4, -3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <motion.div
      className="skillsContainer"
      ref={ref}
      variants={listVariants}
      animate={isInView ? "animate" : "initial"}
    >
      <div className="slogan">
        <h1>How I Can Contribute , My Skills</h1>
      </div>
      <div className="skillsIcons">
        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={html}
          alt="HTML"
        />
        <motion.img
          variants={shakeAnimation1}
          animate="animate"
          src={css}
          alt="CSS"
        />
        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={tailwind}
          alt="Tailwind CSS"
        />
        <motion.img
          variants={shakeAnimation1}
          animate="animate"
          src={sass}
          alt="Sass"
        />
        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={javascript}
          alt="JavaScript"
        />
        <motion.img
          variants={shakeAnimation1}
          animate="animate"
          src={typescript}
          alt="TypeScript"
        />
        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={react}
          alt="React"
        />
        <motion.img
          variants={shakeAnimation1}
          animate="animate"
          src={next}
          alt="Next.js"
        />
        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={mu5}
          alt="Material UI 5"
        />
        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={three}
          alt="Three"
        />
        <motion.img
          variants={shakeAnimation1}
          animate="animate"
          src={redux}
          alt="Redux"
        />

        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={framer}
          alt="Framer Motion"
        />
        <motion.img
          variants={shakeAnimation1}
          animate="animate"
          src={figma}
          alt="Figma"
        />
        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={git}
          alt="Git"
        />

        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={node}
          alt="Node.js"
        />
        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={express}
          alt="Express.js"
        />
        <motion.img
          variants={shakeAnimation}
          animate="animate"
          src={mongo}
          alt="MongoDB"
        />
        <motion.img
          variants={shakeAnimation1}
          animate="animate"
          src={firebase}
          alt="Firebase"
        />
      </div>
    </motion.div>
  );
};

export default Skills;


 