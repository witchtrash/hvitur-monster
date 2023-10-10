import React from 'react';
import { useLoader } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const MonsterCan = () => {
  const model = useLoader(GLTFLoader, '/monster_zero_ultra.glb');

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
