import { AbsoluteFill, Audio, staticFile, Sequence, useVideoConfig } from 'remotion';
import React from 'react';

export const Stage4: React.FC<{
	audio: any
}> = ({ audio }) => {
	const { fps } = useVideoConfig();
	let audioContent = []
	for (let i = 0; i < 1; i++) {
		audioContent.push(
			<Sequence from={9 * fps + (audio.time + 1.5) * fps * i}>
				<Audio src={staticFile(audio.path)} />
			</Sequence>
		);
	}

	return (
		<AbsoluteFill>
			<Sequence from={1 * fps}>
				<Audio src={staticFile("stage4.wav")} />
			</Sequence>

			{audioContent}

			<AbsoluteFill className="bg-gray-100 items-center justify-start pt-16">
				<p
					className="text-gray-500 text-7xl align-top font-bold"
				>
					4. Listening Training
				</p>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
