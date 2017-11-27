import * as SongUtil from '../util/song_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";


const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

const removeSong = (songId) => ({
  type: REMOVE_SONG,
  songId
});

export const fetchSongs = () => dispatch => (
  SongUtil.fetchSongs().then(songs => dispatch(receiveAllSongs(songs)) )
);

export const fetchSong = (songId) => dispatch => (
  SongUtil.fetchSongs(songId).then(song => dispatch(receiveSong(song)) )
);

export const updateSong = (songs) => dispatch => (
  SongUtil.updateSong(songs).then(song => dispatch(receiveSong(song)) )
);

export const createSong = (songs) => dispatch => (
  SongUtil.createSong(songs).then(song => dispatch(receiveSong(song)) )
);

export const deleteSong = (songId) => dispatch => (
  SongUtil.deleteSong(songId).then((song) => dispatch(removeSong(song.id)))
);
