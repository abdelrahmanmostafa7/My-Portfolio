import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 250, 400]} scale={2.7}>
        <MeshDistortMaterial
          color="#f8f8f8"
          attach="material"
          distort={0.4} // Slightly lower distortion for a smoother surface
          speed={3}
          metalness={0.8} // Increased metallic property for more reflection
          roughness={0.99} // Low roughness for smoother surface
          transparent={true} // Enables transparency
          opacity={0.2} // Slightly increased opacity for glass-like effect
          refractionRatio={0.95} // Increased refraction to simulate glass bending light
          envMapIntensity={1.5} // Increased intensity of environment map reflections
          clearcoat={1} // Full clearcoat for shiny surface
        />
      </Sphere>
      <ambientLight intensity={3} />
      <directionalLight position={[1, 2, 3]} intensity={3} />
    </>
  );
};

export default Shape;
