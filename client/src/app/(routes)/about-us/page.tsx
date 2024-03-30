"use client";

import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Rainbow } from "@/components/spectra/Rainbow";

export default function App() {
  return (
    // Wrapper div with Tailwind classes for full screen
    <div className="w-full h-screen">
      <Canvas className="w-full h-full">
        <color attach="background" args={["black"]} />
        <Scene />
      </Canvas>
    </div>
  );
}

function Scene() {
  const ref = useRef<THREE.Object3D>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta / 5;
    }
  });
  return <Rainbow ref={ref} />;
}
