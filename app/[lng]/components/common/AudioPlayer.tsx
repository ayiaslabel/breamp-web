'use client';

import React, { useEffect, useRef } from 'react';
import ReactHowler from 'react-howler';

type AudioPlayerProps = {
  src: string;
  play: boolean;
  seekControl: number | null;
  isSeeking: boolean;
  setSeek: (by: number) => void;
  setSeekControl: (by: number | null) => void;
  onLoadHandler: (by: number) => void;
  onEndHandler: () => void;
};
type ReactHowlerRef = ReactHowler | null;
function AudioPlayer({
  src,
  play,
  seekControl,
  isSeeking,
  setSeek,
  setSeekControl,
  onLoadHandler,
  onEndHandler,
}: AudioPlayerProps) {
  const playerRef = useRef<ReactHowlerRef>(null);
  const requestRef = useRef<number>();

  const loadHandler = () => {
    if (playerRef && playerRef.current) {
      const duration = playerRef.current.duration();
      if (duration) onLoadHandler(duration);
    }
  };

  const renderSeekPos = () => {
    if (playerRef && playerRef.current && !isSeeking) {
      let seek;
      if (seekControl !== null) {
        seek = playerRef.current.seek(seekControl);
        setSeekControl(null);
      } else seek = playerRef.current.seek();

      if (seek) setSeek(seek);
    }
    if (play) requestRef.current = requestAnimationFrame(renderSeekPos);
  };
  const onPlayHandler = () => {
    requestAnimationFrame(renderSeekPos);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(renderSeekPos);
    return () => {
      if (requestRef && requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [requestRef.current]);

  return (
    <ReactHowler
      src={src}
      playing={play}
      onLoad={loadHandler}
      onPlay={onPlayHandler}
      onEnd={onEndHandler}
      ref={playerRef}
      volume={0.3}
    />
  );
}

export default AudioPlayer;
