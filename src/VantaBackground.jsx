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
      highlightColor: 0xd4d4d4,
      midtoneColor: 0xd6d6d6,
      lowlightColor: 0xe0e0e0,
      baseColor: 0xf7f7f7,
      blurFactor: 0.86,
      speed: 2.0,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        position: "fixed", // ✅ covers the full page, even when scrolling
      }}
    />
  );
};

export default VantaBackground;
