import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useProgress } from "@react-three/drei";

const Overlay = styled.div<{ visible: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  transition: opacity 0.6s ease;
  pointer-events: none;

  ${({ visible }) =>
		!visible &&
		css`
      opacity: 0;
    `}
`;

const Bar = styled.div`
  width: 160px;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
`;

const Fill = styled.div<{ progress: number }>`
  height: 100%;
  background: white;
  border-radius: 2px;
  transition: width 0.3s ease;
  width: ${({ progress }) => progress}%;
`;

const Label = styled.span`
  font-family: system-ui, sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.05em;
`;

export const Loader = () => {
	const { progress, active } = useProgress();

	return (
		<Overlay visible={active}>
			<Label>{Math.round(progress)}%</Label>
			<Bar>
				<Fill progress={progress} />
			</Bar>
		</Overlay>
	);
};
