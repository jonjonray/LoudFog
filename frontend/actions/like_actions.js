import * as likeUtil from '../util/like_util';

export const makeLike = (like) => ({
  type: "MAKE_LIKE",
  like
});


export const removeLike = (like) => ({
  type: "REMOVE_LIKE",
  like
});


export const createLike = (like) => dispatch => (
  likeUtil.createLike(like).then((data) => dispatch(makeLike(like)))
);
export const deleteLike = (like) => dispatch =>  (
  likeUtil.deleteLike(like).then((data) => dispatch(removeLike(like)))
);
