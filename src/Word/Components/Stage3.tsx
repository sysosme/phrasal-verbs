import { useCurrentFrame, AbsoluteFill, Audio, staticFile, Sequence, Series, useVideoConfig } from 'remotion';
import React from 'react';

export const Stage3: React.FC<{
	word: string, example: string, audio: any
}> = ({ word, example, audio }) => {
	const { fps } = useVideoConfig();
	return (
		<AbsoluteFill>
			<Sequence from={1 * fps}>
				<Audio src={staticFile("stage3.wav")} />
			</Sequence>

			<AbsoluteFill className="bg-gray-100 items-center justify-start pt-16 pl-16 pr-16">
				<p
					className="text-gray-500 text-7xl align-top font-bold"
				>
					3. Reading Training
				</p>
				<p className="text-gray-600 text-6xl font-bold text-green-500 mt-8">
					{example}
				</p>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
