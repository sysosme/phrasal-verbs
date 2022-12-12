import { useCurrentFrame, AbsoluteFill, Audio, staticFile, Sequence, Series, useVideoConfig } from 'remotion';
import React from 'react';

export const Stage5: React.FC<{
	word: string, example: string, audio: any
}> = ({ word, example, audio }) => {
	const { fps } = useVideoConfig();
	let audioContent = []
	for (let i = 0; i < 1; i++) {
		audioContent.push(
			<Sequence from={8 * fps + (audio.time + 1.5) * fps * i}>
				<Audio src={staticFile(audio.path)} />
			</Sequence>
		);
	}

	return (
		<AbsoluteFill>
			<Sequence from={1 * fps}>
				<Audio src={staticFile("stage5.wav")} />
			</Sequence>

			{audioContent}

			<AbsoluteFill className="bg-gray-100 items-center justify-start pt-16 pl-16 pr-16">
				<p
					className="text-gray-500 text-7xl align-top font-bold"
				>
					5. Speaking Training
				</p>
				<p className="text-gray-600 text-6xl font-bold text-green-500 mt-8">
					{example}
				</p>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
