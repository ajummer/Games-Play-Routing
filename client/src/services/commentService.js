import * as request from "../lib/request.js";
const baseUrl = "http://localhost:3030/data/comments";

export const create = async (gameId, comment) => {
  const newComment = await request.post(baseUrl, {
    gameId,
    comment,
  });

  return newComment;
};

export const getAll = async (gameId) => {
  const query = new URLSearchParams({
    where: `gameId="${gameId}"`,
    load: `owner=_ownerId:users`,
  });
  const comments = await request.get(`${baseUrl}?${query}`);
  return comments;
};
