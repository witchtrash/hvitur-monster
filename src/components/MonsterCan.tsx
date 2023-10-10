import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const MonsterCan = () => {
  const model = useLoader(GLTFLoader, '/monster_zero_ultra.glb');

  return (
    <React.Suspense>
      <mesh>
        <primitive object={model.scene} />
      </mesh>
    </React.Suspense>
  );
};
