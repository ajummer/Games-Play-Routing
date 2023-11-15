import * as request from "../lib/request.js";
const baseUrl = "http://localhost:3030/jsonstore/comments";

export const create = async (gameId, username, comment) => {
  const newComment = await request.post(baseUrl, {
    gameId,
    username,
    comment,
  });

  return newComment;
};

export const getAll = async () => {
  const comments = await request.get(baseUrl);
  return Object.values(comments);
};
