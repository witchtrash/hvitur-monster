import { Sparkles as Sparkle } from '@react-three/drei';

export const Sparkles = () => (
  <>
    <Sparkle scale={15} size={2.5} speed={0} noise={0} />
    <Sparkle scale={12} size={2} speed={0} noise={0} />
    <Sparkle scale={8} size={3} speed={0} noise={0} />
    <Sparkle scale={4} size={2} speed={0.5} />
    <Sparkle scale={2.5} size={4} speed={0.5} />
  </>
);
