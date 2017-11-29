export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const PLAY_PAUSE = "PLAY_PAUSE";


export const playSong = () => ({
  type: PLAY_SONG
});

export const pauseSong = () => ({
  type: PAUSE_SONG
});

export const playPause = () => ({
  type: PLAY_PAUSE,
});
