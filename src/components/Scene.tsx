import styled from "@emotion/styled";
import {
	Center,
	Cloud,
	Clouds,
	Environment,
	Float,
	Lightformer,
	Select,
	Stars,
	Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Camera } from "components/Camera";
import { Loader } from "components/Loader";
import { MonsterCan } from "components/MonsterCan";
import { Sparkles } from "components/Sparkles";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    #b63be3 0%,
    #8e57e6 25%,
    rgba(152, 68, 183, 1) 51%,
    #ff3572 100%
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
	const ringLightRef = useRef(null);
	const rectLightRef = useRef(null);
	const directionalLightRef = useRef(null);
	return (
		<>
			{import.meta.env.DEV ? <Stats /> : null}
			<Camera />

			<Suspense fallback={null}>
				<Environment
					preset="city"
					background={false}
					environmentIntensity={1.4}
				>
					<Lightformer
						ref={ringLightRef}
						form="ring"
						intensity={1.0}
						position={[2, 1, -3]}
						rotation={[0, Math.PI / 2, 0]}
					/>
					<Lightformer
						ref={rectLightRef}
						intensity={0.5}
						position={[-2, 1, -3]}
						rotation={[0, -Math.PI / 2, 0]}
						scale={[3, 3, 1]}
					/>
				</Environment>

				<directionalLight
					ref={directionalLightRef}
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
						<Select>
							<MonsterCan />
						</Select>
					</Float>
				</Center>

				<Sparkles />

				<Select>
					<Clouds material={THREE.MeshBasicMaterial}>
						<Cloud
							position={[0, -3, 0]}
							bounds={[2, 0.5, 2]}
							segments={50}
							volume={4}
							opacity={0.1}
							speed={0.05}
							color="#c0c0ff"
						/>
					</Clouds>
				</Select>

				<Stars
					radius={100}
					depth={50}
					count={8000}
					factor={4}
					saturation={0}
					fade
					speed={1}
				/>

				<EffectComposer>
					<Bloom mipmapBlur luminanceThreshold={0.2} luminanceSmoothing={0.9} />
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
