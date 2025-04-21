import "./Header.scss";
import Avatar from "../../assets/avatar.png";
import Shape from "./Shape";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import linkedIn from "../../assets/linkedIn.png";
import gitHub from "../../assets/gitHup.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      className="headerContainer"
      ref={ref}
    >
      <motion.div
        className="left"
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="headerInfo">
          <h5>Hello, I'm</h5>
          <h1 className="h1">Abdelrahman Zaki</h1>
          <h2>FullStack Developer</h2>
          <p>Experienced proficient in MERN Stack</p>
        </div>

        <div className="headerLinks">
          <img src={gitHub} alt="GitHub" className="linkImg" />
          <img src={linkedIn} alt="LinkedIn" className="linkImg" />
          <button className="cvBtn">Download CV</button>
        </div>
      </motion.div>

      <motion.div
        className="right"
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="bg">
          <Canvas className="shapeCanvas" camera={{ position: [0, 0, 5] }}>
            <Suspense fallback="loading...">
              <Shape />
            </Suspense>
          </Canvas>
        </div>
        <img src={Avatar} alt="Avatar" className="avatar" />
      </motion.div>
    </motion.div>
  );
};

export default Header;
