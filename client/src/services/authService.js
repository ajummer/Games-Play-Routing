import * as request from "../lib/request.js";
const baseUrl = "http://localhost:3030/users";

export const login = async (loginData) => {
  const token = request.post(`${baseUrl}/login`, loginData);
  return token
};