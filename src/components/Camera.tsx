import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const TARGET_SPEED = 0.65;
const EASE_DURATION = 10;
const PAUSE_DURATION = 15;

export const Camera = () => {
	const ref = useRef<OrbitControlsImpl>(null);
	const elapsed = useRef(0);
	const pauseTimer = useRef(0);
	const paused = useRef(false);

	useFrame((_, delta) => {
		if (!ref.current) return;

		if (paused.current) {
			pauseTimer.current += delta;
			if (pauseTimer.current >= PAUSE_DURATION) {
				paused.current = false;
				elapsed.current = 0;
			} else {
				ref.current.autoRotateSpeed = 0;
				return;
			}
		}

		if (elapsed.current < EASE_DURATION) {
			elapsed.current = Math.min(elapsed.current + delta, EASE_DURATION);
			const t = elapsed.current / EASE_DURATION;
			ref.current.autoRotateSpeed = TARGET_SPEED * (1 - (1 - t) ** 3);
		}
	});

	return (
		<OrbitControls
			ref={ref}
			autoRotateSpeed={0}
			zoomSpeed={0.75}
			maxDistance={8}
			minDistance={8}
			minPolarAngle={Math.PI / 4}
			maxPolarAngle={Math.PI / 2}
			enablePan={false}
			enableDamping
			autoRotate
			onEnd={() => {
				paused.current = true;
				pauseTimer.current = 0;
			}}
		/>
	);
};
