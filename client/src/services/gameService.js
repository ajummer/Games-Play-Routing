const baseUrl = "http://localhost:3030/jsonstore/games";

import * as request from "../lib/request.js";

export const create = async (data) => {
  const result = await request.post(baseUrl, data);

  return result;
};

export const getAll = async () => {
  const result = await request.get(baseUrl);
  return Object.values(result);
};
