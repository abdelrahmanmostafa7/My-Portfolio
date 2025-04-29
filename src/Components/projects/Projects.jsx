import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ProjectsData from "../../data/ProjectsData.js";

const SingleProject = ({ item }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section>
      <motion.div
        className="projectContainer"
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="projectWrapper">
          <motion.div
            className="imageContainer"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img src={item.img} alt="" />
          </motion.div>
          <motion.div
            className="textContainer"
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="projectBtns">
              <button>Live Demo</button>
              <a
                href={item.githup}
                target="_blank"
                rel="noopener noreferrer"
                className="linkWrapper"
              >
                <button>Git Hup</button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0], [1, 0]);

  return (
    <div className="projects" ref={ref}>
      <div className="projectsHeader">
        <motion.h1 style={{ opacity }}>Featured Works</motion.h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {ProjectsData.map((item) => (
        <SingleProject item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
