import { Sparkles as Sparkle } from "@react-three/drei";

export const Sparkles = () => (
	<>
		<Sparkle scale={17} size={2} speed={0.2} noise={0.5} />
		<Sparkle scale={15} size={2} speed={0.2} noise={0.5} />
		<Sparkle scale={12} size={2} speed={0.2} noise={0.5} />
	</>
);
