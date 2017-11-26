export const fetchSong = (id) => (
  $.ajax({
    method: "GET",
    url: `api/songs/${id}`
  })
);

export const fetchSongs = () => (
  $.ajax({
    method: "GET",
    url: `api/songs`
  })
);


export const updateSong = (song) => (
  $.ajax({
    method: "PATCH",
    url: `api/songs/${song.id}`,
    data: { song }
  })
);

export const createSong = (song) => (
  $.ajax({
    method: "POST",
    url: `api/songs`,
    data: song,
    contentType: false,
    processData: false
  })
);

export const deleteSong = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/songs/${id}`
  })
);
