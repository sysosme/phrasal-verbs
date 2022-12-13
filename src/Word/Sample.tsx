import { Card } from './Components/Card';

import { Series, useVideoConfig } from "remotion";

const data = {
	word: "put up with sb/sth",
	explain: {
		text: "To accept something even though it is unpleasant",
		audio: "put-up-with/explain.wav",
		time: 5,
	},
	example1: {
		text: `If I <span style="color:rgb(34 197 94);">put up with</span> something, I accept it even though it is unpleasant.`,
		audio: "put-up-with/example1.wav",
		time: 4,
	},
	example2: {
		text: "I don't know how you put up with shouting and screaming from all these children.",
		audio: "put-up-with/example2.wav",
		time: 4,
	}
}

export const Sample = () => {
	const { fps } = useVideoConfig();
	return (
		<Series>
			<Series.Sequence durationInFrames={12 * fps + 2 * (data.explain.time + 1.5) * fps}>
				<Card stage={1} word={data.word} sentence={data.explain} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={11 * fps + 2 * (data.example1.time + 1.5) * fps}>
				<Card stage={2} word={data.word} sentence={data.example1} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={7 * fps + 1 * (data.example1.time + 1.5) * fps}>
				<Card stage={3} word={data.word} sentence={data.example1} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={10 * fps + 2 * (data.example1.time + 1.5) * fps}>
				<Card stage={4} word={data.word} sentence={data.example1} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={9 * fps + 2 * (data.example1.time + 1.5) * fps}>
				<Card stage={5} word={data.word} sentence={data.example1} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={5 * fps}>
				<Card stage={6} word={data.word} sentence={data.example2} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={7 * fps + 1 * (data.example2.time + 1.5) * fps}>
				<Card stage={3} word={data.word} sentence={data.example2} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={10 * fps + 2 * (data.example2.time + 1.5) * fps}>
				<Card stage={4} word={data.word} sentence={data.example2} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={9 * fps + 2 * (data.example2.time + 1.5) * fps}>
				<Card stage={5} word={data.word} sentence={data.example2} />
			</Series.Sequence>
		</Series>
	);
};
