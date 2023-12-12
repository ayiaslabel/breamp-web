'use client';

import React, { useState, useMemo } from 'react';
import { useMusic } from '@stores/music.store';
import AudioPlayer from './AudioPlayer';

function AudioPlayerComp() {
  const music = useMusic();
  const [musicIndex, setMusicIndex] = useState(0);
  const [seekControl, setSeekControl] = useState<number | null>(null);

  const playList: string[] = new Array(100)
    .fill(null)
    .map((_) => '/assets/music/bg.mp3');

  const onEndHandler = () => {
    setMusicIndex((prevIndex) => (prevIndex + 1) % playList.length);
    music.reset();
  };

  const onMouseUpSeekHandler = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    music.onMouseUpSeekHandler();
    const target = event.target as HTMLInputElement;
    setSeekControl(parseFloat(target.value));
  };

  const ratio = music.seek / music.duration;

  return (
    <>
      <AudioPlayer
        src={playList[musicIndex]}
        play={music.play}
        seekControl={seekControl}
        isSeeking={music.isSeeking}
        setSeek={music.setSeek}
        setSeekControl={setSeekControl}
        onLoadHandler={music.onLoadHandler}
        onEndHandler={onEndHandler}
      />
    </>
  );
}

export default AudioPlayerComp;
