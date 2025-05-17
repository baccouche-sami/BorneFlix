import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Sphere, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function ChargingCable() {
  const ref = useRef<THREE.Mesh>(null!);
  
  // Animation de la courbe du câble
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
      ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  // Création d'une courbe pour représenter un câble
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.5, 0.3, 0.3),
    new THREE.Vector3(1, 0.5, 0.5),
    new THREE.Vector3(1.5, 0.4, 0.2),
    new THREE.Vector3(2, 0, 0),
  ]);

  const points = curve.getPoints(50);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  
  return (
    <mesh ref={ref} position={[-1, 0, 0]}>
      <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#00aaff', linewidth: 5 }))} />
    </mesh>
  );
}

function CircularElements() {
  const greenCircleRef = useRef<THREE.Mesh>(null!);
  const yellowCircleRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (greenCircleRef.current) {
      greenCircleRef.current.position.x = Math.sin(t * 0.3) * 0.1;
      greenCircleRef.current.position.y = Math.cos(t * 0.2) * 0.1;
    }
    if (yellowCircleRef.current) {
      yellowCircleRef.current.position.x = Math.sin(t * 0.2 + 1) * 0.1;
      yellowCircleRef.current.position.y = Math.cos(t * 0.3 + 1) * 0.1;
    }
  });
  
  return (
    <group>
      <mesh ref={yellowCircleRef} position={[-2, 1, -1]}>
        <planeGeometry args={[2.5, 2.5]} />
        <meshBasicMaterial color="#ffffa0" transparent opacity={0.7} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={greenCircleRef} position={[-1, 0.5, -0.5]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="#8dc63f" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function ChargingStation() {
  const stationRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (stationRef.current) {
      stationRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    }
  });
  
  return (
    <group ref={stationRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 1.2, 0.5]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0.7, 0.3]}>
        <boxGeometry args={[0.4, 0.3, 0.1]} />
        <meshStandardMaterial color="#003566" />
      </mesh>
      <mesh position={[0, 0.3, 0.3]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#8dc63f" />
      </mesh>
    </group>
  );
}

function Scene() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 1, 5);
  }, [camera]);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <CircularElements />
      <ChargingStation />
      <ChargingCable />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

const HeroAnimation = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas dpr={[1, 2]} style={{ width: '100%', height: '100%', minHeight: '400px' }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroAnimation;