import { useCurrentFrame, AbsoluteFill, Audio, staticFile, Sequence, interpolate, useVideoConfig, spring } from 'remotion';
import React from 'react';

export const Stage1: React.FC<{
	word: string, explain: string, audio: any
}> = ({ word, explain, audio }) => {
	const { fps } = useVideoConfig();
	let audioContent = []
	for (let i = 0; i < 2; i++) {
		audioContent.push(
			<Sequence from={11 * fps + (audio.time + 1.5) * fps * i}>
				<Audio src={staticFile(audio.path)} />
			</Sequence>
		);
	}

	const frame = useCurrentFrame();

	const zoomProgress = spring({
		fps,
		frame: frame - 20,
		config: {
			damping: 200,
		},
	});

	const translateX = interpolate(zoomProgress, [0, 1], [987, 0], {
		extrapolateRight: "clamp",
	});

	return (
		<AbsoluteFill>
			<Sequence from={1 * fps}>
				<Audio src={staticFile("stage1.wav")} />
			</Sequence>

			{audioContent}

			<AbsoluteFill className="bg-gray-100 items-center justify-start pt-16">
				<p
					className="text-gray-500 text-5xl align-top font-bold"
				>
					Pronunciation and Meaning
				</p>
				<p className="text-gray-600 text-6xl font-bold text-green-500 mt-8 underline">
					{word}
				</p>
			</AbsoluteFill>
			<AbsoluteFill className="mt-80 pl-16" style={{
				transform: `translateX(${translateX}px)`,
			}}>
				<p className="text-yellow-400 text-6xl font-bold" >
					Meaning
				</p>
				<p className="text-5xl mt-5 text-gray-500">
					{explain}
				</p>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
