import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Composant 3D simple représentant une borne de recharge
function ChargingStationModel() {
  const group = useRef<THREE.Group>(null);
  
  // Animation simple - rotation lente
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        state.mouse.x * Math.PI * 0.2,
        0.05
      );
    }
  });

  return (
    <group ref={group}>
      {/* Base de la borne */}
      <mesh position={[0, -1, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.2, 1.5]} />
        <meshStandardMaterial color="#333333" roughness={0.5} metalness={0.8} />
      </mesh>
      
      {/* Corps de la borne */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 3, 0.8]} />
        <meshStandardMaterial color="#003566" roughness={0.2} metalness={0.7} />
      </mesh>
      
      {/* Écran de la borne */}
      <mesh position={[0, 0.8, 0.41]} castShadow>
        <boxGeometry args={[0.8, 0.6, 0.01]} />
        <meshStandardMaterial color="#111111" roughness={0.1} metalness={0.9} />
      </mesh>
      
      {/* Prise de recharge */}
      <mesh position={[0, 0, 0.41]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
        <meshStandardMaterial color="#8dc63f" roughness={0.4} metalness={0.6} />
      </mesh>
      
      {/* Logo sur la borne */}
      <mesh position={[0, 1.5, 0.41]} castShadow>
        <planeGeometry args={[0.8, 0.3]} />
        <meshStandardMaterial color="#8dc63f" roughness={0.3} metalness={0.2} />
      </mesh>
      
      {/* Câble de recharge (courbe simple) */}
      <mesh position={[0.5, -0.5, 0.2]} castShadow>
        <torusGeometry args={[0.5, 0.03, 16, 100, Math.PI]} />
        <meshStandardMaterial color="#333333" roughness={0.8} metalness={0.2} />
      </mesh>
    </group>
  );
}

// Composant englobant pour l'intégration sur le site
export default function ChargingStation3D() {
  return (
    <div className="w-full h-[400px] lg:h-[500px] relative">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <ChargingStationModel />
        
        <ContactShadows 
          rotation-x={Math.PI / 2}
          position={[0, -1.5, 0]}
          opacity={0.6}
          width={10}
          height={10}
          blur={1}
          far={1.5}
        />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
        />
        
        <Environment preset="city" />
      </Canvas>
      
      {/* Effet de lueur sous le modèle */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-100/20 to-transparent pointer-events-none" />
    </div>
  );
}