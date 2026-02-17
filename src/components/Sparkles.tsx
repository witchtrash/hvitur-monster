import { Sparkles as Sparkle } from "@react-three/drei";

export const Sparkles = () => (
	<>
		<Sparkle scale={15} size={1.5} speed={0.2} noise={1} />
		<Sparkle scale={12} size={1.2} speed={0.2} noise={0.5} />
	</>
);
