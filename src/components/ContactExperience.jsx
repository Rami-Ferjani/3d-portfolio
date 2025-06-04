import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Computer } from "./Models/Computer-optimized";

const ComputerModel = () => {
  //   const computer = useGLTF("/models/computer-optimized-transformed.glb");
  //   return (
  //     <primitive
  //       object={computer.scene}
  //       scale={2.5}
  //       position={[0, -1.5, 0]}
  //       rotation={[0, -Math.PI / 4, 0]}
  //     />
  //   );
};

// const ContactLights = () => {
//   return (
//     <>
//       <ambientLight intensity={0.3} />
//       <spotLight
//         position={[0, 5, 5]}
//         intensity={80}
//         angle={0.15}
//         penumbra={0.4}
//         color="white"
//       />
//       <spotLight
//         position={[5, 2, 0]}
//         intensity={40}
//         angle={0.3}
//         penumbra={0.5}
//         color="#4cc9f0"
//       />
//       <pointLight position={[-5, 2, 0]} intensity={20} color="#7209b7" />
//     </>
//   );
// };

const ContactLights = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
};

const ContactExperience = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxDistance={10}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ContactLights />
        <group scale={0.03} position={[0, -1.5, -2]} castShadow>
          <Computer />
        </group>
        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#cd7c2e" />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
};

export default ContactExperience;
