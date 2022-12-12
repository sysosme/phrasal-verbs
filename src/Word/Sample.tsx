import { Stage1 } from './Components/Stage1';
import { Stage2 } from './Components/Stage2';
import { Stage3 } from './Components/Stage3';
import { Stage4 } from './Components/Stage4';
import { Stage5 } from './Components/Stage5';
import { Repeat } from './Components/Repeat';

import { Series, useVideoConfig } from "remotion";

const data = {
	word: "put up with sb/sth",
	explain: {
		text: "To accept something even though it is unpleasant",
		audio: {
			path: "put-up-with/explain.wav",
			time: 5
		},
	},
	example1: {
		text: `If I <span style="color:rgb(34 197 94);">put up with</span> something, I accept it even though it is unpleasant.`,
		audio: {
			path: "put-up-with/example1.wav",
			time: 4
		},
	},
	example2: {
		text: "I don't know how you put up with shouting and screaming from all these children.",
		audio: {
			path: "put-up-with/example2.wav",
			time: 4
		},
	}
}

export const Sample = () => {
	const { fps } = useVideoConfig();
	return (
		<Series>
			<Series.Sequence durationInFrames={12 * fps + 2 * (data.explain.audio.time + 1.5) * fps}>
				<Stage1 word={data.word} explain={data.explain.text} audio={data.explain.audio} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={11 * fps + 2 * (data.example1.audio.time + 1.5) * fps}>
				<Stage2 word={data.word} example={data.example1.text} audio={data.example1.audio} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={7 * fps + 1 * (data.example1.audio.time + 1.5) * fps}>
				<Stage3 word={data.word} example={data.example1.text} audio={data.example1.audio} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={10 * fps + 2 * (data.example1.audio.time + 1.5) * fps}>
				<Stage4 audio={data.example1.audio} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={9 * fps + 2 * (data.example1.audio.time + 1.5) * fps}>
				<Stage5 word={data.word} example={data.example1.text} audio={data.example1.audio} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={5 * fps}>
				<Repeat/>
			</Series.Sequence>
			<Series.Sequence durationInFrames={7 * fps + 1 * (data.example2.audio.time + 1.5) * fps}>
				<Stage3 word={data.word} example={data.example2.text} audio={data.example2.audio} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={10 * fps + 2 * (data.example2.audio.time + 1.5) * fps}>
				<Stage4 audio={data.example2.audio} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={9 * fps + 2 * (data.example2.audio.time + 1.5) * fps}>
				<Stage5 word={data.word} example={data.example2.text} audio={data.example2.audio} />
			</Series.Sequence>
		</Series>
	);
};
