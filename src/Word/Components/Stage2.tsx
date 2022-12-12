import { useCurrentFrame, AbsoluteFill, Audio, staticFile, Sequence, Series, useVideoConfig } from 'remotion';
import React from 'react';

export const Stage2: React.FC<{
	word: string, example: string, audio: any
}> = ({ word, example, audio }) => {
	const { fps } = useVideoConfig();
	let audioContent = []
	for (let i = 0; i < 2; i++) {
		audioContent.push(
			<Sequence from={10 * fps + (audio.time + 1.5) * fps * i}>
				<Audio src={staticFile(audio.path)} />
			</Sequence>
		);
	}

	return (
		<AbsoluteFill>
			<Sequence from={1 * fps}>
				<Audio src={staticFile("stage2.wav")} />
			</Sequence>

			{audioContent}

			<AbsoluteFill className="bg-gray-100 items-center justify-start pt-16">
				<p
					className="text-gray-500 text-7xl align-top font-bold"
				>
					2. Example sentence
				</p>
				<p className="text-6xl font-bold text-green-500 mt-8 underline">
					{word}
				</p>
			</AbsoluteFill>
			<AbsoluteFill className="mt-80 pl-16">
				<p className="text-yellow-400 text-6xl font-bold">
					Examples
				</p>
				<p dangerouslySetInnerHTML={{ __html: example }} className="text-5xl mt-5 text-gray-500">
				</p>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
