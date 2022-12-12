import { useCurrentFrame, AbsoluteFill, Audio, staticFile, Sequence, Series, useVideoConfig } from 'remotion';
import React from 'react';

export const Repeat: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Sequence from={1 * fps}>
        <Audio src={staticFile("repeat.wav")} />
      </Sequence>

      <AbsoluteFill className="bg-gray-100 items-center justify-start pt-32">
        <p
          className="text-gray-500 text-7xl align-top font-bold"
        >
          Pick a new sentence and repeat stage 3 ~ 5
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
