import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const MonsterCan = () => {
  const model = useLoader(GLTFLoader, '/monster_zero_ultra.glb');

  return (
    <mesh>
      <primitive object={model.scene} />
    </mesh>
  );
};
