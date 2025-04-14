import "./Header.scss";
import Avatar from "../../assets/avatar.png";
import { Speech } from "./Speech";
import Shape from "./Shape";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="left">
        <Speech />
        <button className="cvBtn">Download CV</button>
      </div>
      <div className="right">
        <div className="bg">
          <Canvas className="shapeCanvas" camera={{ position: [0, 0, 5] }}>
            <Suspense fallback="loading...">
              <Shape />
            </Suspense>
          </Canvas>
        </div>
        <img src={Avatar} alt="Avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Header;
