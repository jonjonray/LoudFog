export const createComment = (comment) => (
  $.ajax({
    method: "POST",
    url: "api/comments",
    data: { comment }
  })
);

export const fetchComments = (id) => {

  return ($.ajax({
    method: "GET",
    url: `api/comments/${id}`,
  })
);
};

export const deleteComment = (id) => (
  $.ajax({
    method: "GET",
    url: `api/comments/${id}`
  })
);
