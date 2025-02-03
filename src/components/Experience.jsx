import {
  Cylinder,
  MeshReflectorMaterial,
  OrbitControls,
  useHelper
} from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useGameStore } from "../store";
// import { CharacterController } from "./CharacterController";
import { DirectionalLightHelper, SpotLightHelper } from "three";

import { Torii } from "./Torii";
import { Portal } from "./Portal";

// function LightWithHelper({ target }) {
//   const light = useRef();
//   useHelper(light, DirectionalLightHelper, 'orange');

//   useEffect(() => {
//     if (light.current && target) {
//       light.current.target = target;
//     }
//   }, [target]);

//   return (
//     <spotLight 
//       ref={light} 
//       angle={Math.PI / 9}
//        // Adjust position as needed
//       intensity={150} 
//       color={"#9e69da"} 
//     />
//   );
// }

 const Experience = () => {
  const startGame = useGameStore((state) => state.startGame);
  const portalRef = useRef();


  useEffect(() => {
    startGame();
  }, []);

  return (
    <>
      <OrbitControls />
      {/* LIGHTS */}
      <ambientLight intensity={1} />
      {/* <directionalLight
       
      /> */}
      <directionalLight
        
        intensity={1.5}
        castShadow
        color={"#9e69da"}
      />
{/* <LightWithHelper target={portalRef.current} /> */}
      {/* BACKGROUND */}

      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={1024}
          mixBlur={1}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
          roughness={1}
        />
      </mesh>

      <Torii
        scale={[16, 16, 16]}
        position={[0, 0, -22]}
        rotation-y={1.25 * Math.PI}
      />
      <Torii
        scale={[10, 10, 10]}
        position={[-8, 0, -20]}
        rotation-y={1.4 * Math.PI}
      />
      <Torii scale={[10, 10, 10]} position={[8, 0, -20]} rotation-y={Math.PI} 
      
      />

      <Portal
        scale={[12, 12, 12]}
        position={[-14, -5, -16]}
        rotation-y={ 0.2 * Math.PI}
        // ref={portalRef}
      />
      <Portal
        scale={[15, 15, 15]}
        position={[-1, -6, -25]}
        rotation-y={2.01 * Math.PI}
        
      />
      <Portal scale={[12, 12, 12]} position={[14, -5, -15]} rotation-y={1.8 * Math.PI} />

      

      <group position-y={-1}>
        {/* STAGE */}
        <RigidBody
          colliders={false}
          type="fixed"
          position-y={-0.5}
          friction={2}
        >
          <CylinderCollider args={[1 / 2, 5]} />
          <Cylinder scale={[5, 1, 5]} receiveShadow>
            <meshStandardMaterial color="white" />
          </Cylinder>
        </RigidBody>

        {/* CHARACTER */}
        {/* <CharacterController /> */}

        {/* KANA */}
        {/* <KanaSpots /> */}
      </group>
    </>
  );
};
export default Experience;
