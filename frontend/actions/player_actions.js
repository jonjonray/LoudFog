export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const PLAY_NEW_SONG = "PLAY_NEW_SONG";


export const playSong = () => ({
  type: PLAY_SONG
});

export const pauseSong = () => ({
  type: PAUSE_SONG
});

export const playNewSong = (songId) => ({
  type: PLAY_NEW_SONG,
  songId
});
