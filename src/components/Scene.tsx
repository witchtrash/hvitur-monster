import styled from "@emotion/styled";
import {
	Center,
	Cloud,
	Clouds,
	Environment,
	Float,
	Lightformer,
	Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Camera } from "components/Camera";
import { Loader } from "components/Loader";
import { MonsterCan } from "components/MonsterCan";
import { Sparkles } from "components/Sparkles";
import { KernelSize, Resolution } from "postprocessing";
import { Suspense } from "react";
import * as THREE from "three";

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
				<Environment
					preset="city"
					background={false}
					environmentIntensity={1.4}
				>
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

				<directionalLight
					color="#00ffff"
					position={[0, 0, 5]}
					intensity={1.0}
				/>

				<Center position={[0, -1, 0]}>
					<Float
						rotationIntensity={1}
						floatIntensity={1}
						floatingRange={[0.5, 1.0]}
					>
						<MonsterCan />
					</Float>
				</Center>

				<Sparkles />

				<Clouds material={THREE.MeshBasicMaterial}>
					<Cloud
						position={[0, -6.5, 0]}
						bounds={[12, 0.5, 12]}
						segments={120}
						volume={10}
						opacity={0.1}
						fade={12}
						speed={0.15}
						growth={8}
						color="#c0c0d0"
					/>
				</Clouds>

				<EffectComposer>
					<Bloom
						intensity={1.0}
						kernelSize={KernelSize.LARGE}
						luminanceThreshold={1.9}
						luminanceSmoothing={0.025}
						mipmapBlur={false}
						resolutionX={Resolution.AUTO_SIZE}
						resolutionY={Resolution.AUTO_SIZE}
					/>
				</EffectComposer>
			</Suspense>
		</>
	);
};

export const Scene = () => {
	return (
		<Container>
			<Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
				<SceneContent />
			</Canvas>
			<Loader />
		</Container>
	);
};
