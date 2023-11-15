import * as request from "../lib/request.js";
const baseUrl = "http://localhost:3030/jsonstore/comments";

export const create = (gameId, username, comment) => {
  const newComment = request.post(baseUrl, {
    gameId,
    username,
    comment,
  });

  return newComment;
};
