import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ecommerce from "../../assets/ecommerce.png";
import blog from "../../assets/blog.png";
import nikeStore from "../../assets/nikeStore.png";
import tourScope from "../../assets/tourScope.png";
import clothesStore from "../../assets/clothesStore.png";
const items = [
  {
    id: 1,
    title: "Full Stack E-Commerce",
    img: ecommerce,
    desc: "Developed a full-stack e-commerce platform with a responsive React frontend and a Node.js/Express backend. Implemented features like user authentication, product management, shopping cart functionality, and order processing. Utilized MongoDB for data storage and Redux for state management, ensuring a seamless user experience.",
  },
  {
    id: 2,
    title: "Blog App",
    img: blog,
    desc: "Developed a full-stack blog application using Next.js, Prisma, MongoDB, and NextAuth. Implemented features such as dynamic theming, user authentication (Google/GitHub), rich text editing, category management, and responsive design. Optimized for SEO with server-side rendering and ensured scalability with Prisma ORM and MongoDB integration.",
  },
  {
    id: 3,
    title: "Tour Scope",
    img: tourScope,
    desc: "A full-stack MERN application designed for personalized travel planning. Features include AI-powered hotel and city recommendations, an interactive Mapbox map for exploration, responsive carousels for showcasing hotels, and a user-friendly interface. Integrated with secure authentication, dynamic data fetching, and a scalable backend API to deliver a seamless travel experience.",
  },
  {
    id: 4,
    title: "Clothes Store",
    img: clothesStore,
    desc: "Developed a modern e-commerce web application using React and React Router. The project includes dynamic routing, a reusable component-based architecture, and a responsive design. Key features include a homepage, product listing, product detail",
  },
  {
    id: 5,
    title: "Nike Store",
    img: nikeStore,
    desc: "Developed a responsive e-commerce web application for showcasing and selling Nike products using React, Redux Toolkit, and TailwindCSS. Implemented features like a dynamic shopping cart, product filtering, and interactive UI components to enhance user experience.",
  },
];

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
              <button>GitHup</button>
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
      {items.map((item) => (
        <SingleProject item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
