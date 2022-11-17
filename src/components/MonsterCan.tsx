import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Sparkles } from '@react-three/drei';

export const MonsterCan = () => {
  const model = useLoader(GLTFLoader, '/assets/monster-can/can.glb');

  return (
    <React.Suspense>
      <mesh>
        <primitive object={model.scene} />
        <Sparkles scale={2.5} size={4} speed={0.1} />
        <Sparkles scale={4} size={2} />
      </mesh>
    </React.Suspense>
  );
};
