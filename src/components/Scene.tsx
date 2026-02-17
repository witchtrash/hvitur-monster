import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MonsterCan } from 'components/MonsterCan';
import { Sparkles } from 'components/Sparkles';
import { Loader } from 'components/Loader';
import { Camera } from 'components/Camera';
import { Environment, Lightformer, Float, Center, Stats, Clouds, Cloud } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
  animation: AnimateBG 20s ease infinite;

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const SceneContent = () => {
  return (
    <>
      <Camera />
      <Stats />

      <Suspense fallback={null}>
        <Environment preset="city" background={false} environmentIntensity={1.4}>
          <Lightformer
            intensity={0.5}
            position={[2, 1, -3]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[3, 3, 1]}
          />
          <Lightformer
            intensity={0.5}
            position={[-2, 1, -3]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[3, 3, 1]}
          />
        </Environment>

        <directionalLight color="#00ffff" position={[0, 0, 5]} intensity={1.0} />

        <Center position={[0, -2, 0]}>
          <Float
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[0.5, 1.0]}
          >
            <MonsterCan />
            <Sparkles />
          </Float>
        </Center>

        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud
            position={[0, -4.5, 0]}
            bounds={[12, 0.5, 6]}
            segments={50}
            volume={10}
            opacity={0.1}
            fade={12}
            speed={0.15}
            growth={8}
            color="#c0c0d0"
          />
        </Clouds>

        <EffectComposer multisampling={0} stencilBuffer={false}>
          <Bloom
            mipmapBlur
            luminanceThreshold={1.2}
            luminanceSmoothing={0.2}
            intensity={0.4}
            radius={0.4}
          />
        </EffectComposer>
      </Suspense>
    </>
  );
};

export const Scene = () => {
  return (
    <Container>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} >
        <SceneContent />
      </Canvas>
      <Loader />
    </Container>
  );
};
