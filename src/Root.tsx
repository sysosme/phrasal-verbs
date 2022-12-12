import { Composition } from 'remotion';
import { MyComposition } from './Composition';
import { Sample } from './Word/Sample';
import './style.css';

const fps = 30;
// the audio duration is 58seconds + 4 frames
const durationInFrames = fps * 200 + 4;

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Word"
				component={Sample}
				durationInFrames={fps * 160 + 4}
				fps={fps}
				width={1920}
				height={1080}
			/>
		</>
	);
};
