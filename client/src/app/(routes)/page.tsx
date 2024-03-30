"use client";

import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Rainbow } from "@/components/spectra/Rainbow";

export default function App() {
  return (
    <Canvas>
      <color attach="background" args={["black"]} />
      <Scene />
    </Canvas>
  );
}

function Scene() {
  const ref = useRef<THREE.Object3D>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta / 5;
    }
  });
  return <Rainbow ref={ref} startRadius={0} endRadius={0.65} fade={0} />;
}
