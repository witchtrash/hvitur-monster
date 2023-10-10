import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MonsterCan } from 'components/MonsterCan';
import {
  Stage,
  Float,
  OrbitControls,
  Center,
  Sparkles,
  ContactShadows,
} from '@react-three/drei';

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

export const Scene = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls
          autoRotateSpeed={0.85}
          zoomSpeed={0.75}
          maxDistance={6}
          minDistance={2}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
          enableDamping
          autoRotate
        />

        <Center>
          <Stage shadows={false}>
            <directionalLight color="#00ffff" position={[0, 0, 5]} />
            <Float
              rotationIntensity={1}
              floatIntensity={1}
              floatingRange={[0.5, 1.0]}
            >
              <MonsterCan />
              <Sparkles scale={12} size={2} speed={0} noise={0} />
              <Sparkles scale={8} size={3} speed={0} noise={0} />
              <Sparkles
                scale={2.5}
                size={4}
                speed={0.1}
                position={[0, 1.5, 0]}
              />
              <Sparkles scale={4} size={2} />
            </Float>
          </Stage>
        </Center>
      </Canvas>
    </Container>
  );
};
