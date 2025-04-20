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

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I'm Abdelrahman Mostafa Zaki, a dedicated Full-Stack Developer with a
          strong academic foundation in Computer Science, holding a degree from
          El Shorouk Academy. My education equipped me with in-depth knowledge
          of data structures, algorithms, database design, operating systems,
          and network security — principles that continue to shape the way I
          build and scale modern web applications.
          <br />
          <br />
          My core expertise lies in the MERN stack (MongoDB, Express.js,
          React.js, Node.js) combined with Firebase, allowing me to deliver
          end-to-end solutions that are both powerful and user-centric. I’m
          particularly passionate about front-end development, where I design
          intuitive, responsive interfaces that align with the latest UI/UX
          trends and accessibility standards.
          <br />
          <br />
          On the server side, I develop clean, secure, and scalable APIs,
          integrating best practices such as input validation, JWT/Firebase
          authentication, and encrypted data handling. I also leverage Firebase
          tools like Firestore and Realtime Database to implement real-time
          features with efficiency and flexibility.
          <br />
          <br />
          I take pride in writing performant, maintainable code. From optimizing
          React components and lazy-loading assets to indexing and querying
          databases efficiently, I always aim to maximize speed and scalability
          without compromising user experience.
          <br />
          <br />
          I’m constantly exploring new technologies and refining my skills — and
          always excited to collaborate on impactful, innovative projects.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
