import { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Mesh, MeshStandardMaterial } from 'three';

export const MonsterCan = () => {
  const model = useLoader(GLTFLoader, '/monster_zero_ultra.glb');

  useEffect(() => {
    model.scene.traverse((child) => {
      if (child instanceof Mesh && child.material instanceof MeshStandardMaterial) {
        child.material.metalness = 0.7;
        child.material.roughness = 0.45;
        child.material.envMapIntensity = 2.0;
        child.material.needsUpdate = true;
      }
    });
  }, [model]);

  return (
    <mesh>
      <primitive object={model.scene} />
    </mesh>
  );
};
