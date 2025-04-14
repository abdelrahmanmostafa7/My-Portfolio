import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

export const Speech = () => {
  return (
    <div className="speechContainer">
      <TypeAnimation
        sequence={["Hello, I'm"]}
        wrapper="span"
        speed={10}
        cursor={false}
        repeat={0}
        style={{ fontSize: "3em", display: "block" }}
      />
      <TypeAnimation
        sequence={[
          "", // small pause
          1100,
          "Abdelrahman Zaki",
        ]}
        wrapper="span"
        speed={10}
        cursor={false}
        repeat={0}
        style={{
          fontSize: "5em",
          fontWeight: "bold",
          display: "block",
          marginTop: "0em",
        }}
      />
      <TypeAnimation
        sequence={[
          "", // small pause
          2500,
          "FullStack Developer",
        ]}
        wrapper="span"
        speed={10}
        cursor={false}
        repeat={0}
        style={{
          fontSize: "4em",
          fontWeight: "bold",
          display: "block",
          marginTop: "0em",
        }}
      />
      <TypeAnimation
        sequence={[
          "", // small pause
          3500,
          "Experienced proficient in MERN Stack",
        ]}
        wrapper="p"
        speed={50}
        cursor={false}
        repeat={0}
        style={{
          fontSize: "24px",
          fontWeight: "regular",
          color:"#878686",
          display: "block",
          marginTop: "0em",
        }}
      />
    </div>
  );
};
