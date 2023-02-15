import { Howl } from 'howler';
import { useCallback, useEffect, useState } from 'react';

export const useAudio = (url: string, volume = 1, playOnUnlock: boolean = true) => {
  const [audio] = useState(new Howl({ src: [url] }));

  const getDuration = useCallback(() => {
    return audio.duration();
  }, [audio]);

  const isPlaying = useCallback(() => {
    return audio.playing();
  }, [audio]);

  const stop = useCallback(() => {
    if (isPlaying()) {
      audio.stop();
      audio.loop(false);
    }
  }, [audio, isPlaying]);

  const reset = useCallback(() => {
    audio.seek(0);
  }, [audio]);

  const play = useCallback(
    (shouldLoop = false) => {
      if (isPlaying()) {
        reset();
      } else {
        audio.play();
        if (shouldLoop) audio.loop(true);
        else audio.loop(false);
      }
    },
    [audio, isPlaying, reset],
  );

  useEffect(() => {
    audio.volume(volume);
    audio.on('unlock', () => {
      if (!playOnUnlock) audio.stop();
    });
  }, [audio, playOnUnlock, volume]);

  return { play, stop, getDuration };
};
