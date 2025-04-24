import React, { useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = FOG({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xdedede,
      midtoneColor: 0xd9d9d9,
      lowlightColor: 0xdedede,
      baseColor: 0xf7f7f7,
      blurFactor: 0.7,
      speed: 3,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed", // Ensure it's fixed to the screen
        top: 0,
        left: 0,
        width: "100%",
        height: "100%", // Make sure it's 100% of the viewport height
        zIndex: -1, // Behind other content
      }}
    />
  );
};

export default VantaBackground;
