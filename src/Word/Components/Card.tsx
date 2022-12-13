import { useCurrentFrame, AbsoluteFill, Audio, staticFile, Sequence, interpolate, useVideoConfig, spring, Img } from 'remotion';
import React from 'react';

type Stage = {
	[key: number]: {
		text: string
		path: string
		time: number
	};
};

type Sentence = {
	text: string
	audio: string
	time: number
}

const stageInfo: Stage = {
	1: {
		path: "stage1.wav",
		text: "pronunciation and meaning",
		time: 11,
	},
	2: {
		path: "stage2.wav",
		text: "Example sentence",
		time: 10,
	},
	3: {
		path: "stage3.wav",
		text: "Reading Training",
		time: 7,
	},
	4: {
		path: "stage4.wav",
		text: "Listening Training",
		time: 9,
	},
	5: {
		path: "stage5.wav",
		text: "Speaking Training",
		time: 8,
	},
	6: {
		path: "repeat.wav",
		text: "Pick a new sentence and repeat stage 3 ~ 5",
		time: 5,
	},

}

export const Card: React.FC<{
	stage: number,
	word: string,
	sentence: Sentence,
}> = ({ stage, word, sentence }) => {

	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	let playTimes = 2
	if (stage == 3) {
		playTimes = 0
	} else if (stage == 4 || stage == 5) {
		playTimes = 1
	}

	let audioContent = []
	for (let i = 0; i < playTimes; i++) {
		audioContent.push(
			<Sequence from={stageInfo[stage].time * fps + (sentence.time + 1.5) * fps * i}>
				<Audio src={staticFile(sentence.audio)} />
			</Sequence>
		);
	}

	let showSentence = true
	let content
	if (stage == 4) {
		showSentence = false
	}

	if (showSentence) {
		content = <p className="text-5xl mt-5 text-gray-700 font-bold text-center mt-8 leading-loose" dangerouslySetInnerHTML={{ __html: sentence.text }}></p>
	} else {
		content = ""
	}

	const rotate = interpolate(frame, [0, 30 * fps], [0, 1800], {
		extrapolateRight: "clamp",
	});

	const zoomProgress = spring({
    fps,
    frame: frame - 20,
    config: {
      damping: 200,
    },
  });
	const translateX = interpolate(zoomProgress, [0, 1], [1920, 0], {
    extrapolateRight: "clamp",
  });

	return (
		<AbsoluteFill>
			<Sequence from={1 * fps}>
				<Audio src={staticFile(stageInfo[stage].path)} />
			</Sequence>

			{audioContent}

			<AbsoluteFill className="bg-gray-100 items-left justify-start px-32 py-16">

				<div className="text-sky-600 text-6xl align-top font-bold text-center">
					{stageInfo[stage as keyof Stage].text}
				</div>

				<div className="rounded-3xl mt-16 py-14 bg-slate-200" style={{
					transform: `translateX(${translateX}px)`,
				}}>
					<div className="text-gray-700 text-5xl font-bold flex justify-center py-16 ">
						<svg xmlns="http://www.w3.org/2000/svg" className="-mt-10" width="48" height="48" viewBox="0 0 24 24"><path className="fill-sky-600" d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" /></svg>
						<div className="ml-16">{word}</div>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-16 mt-10" width="48" height="48" viewBox="0 0 24 24"><path className="fill-sky-600" d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" /></svg>
					</div>

					{content}

					<div className="flex justify-center">
						<div className="rounded-full w-24 h-24 mt-24 bg-sky-600 py-4 px-4 flex">
							<Img style={{ transform: `rotate(${rotate}deg)` }} className="rounded-full" src={staticFile("me.png")} />
						</div>
					</div>
				</div>

			</AbsoluteFill>
		</AbsoluteFill>
	);
};
