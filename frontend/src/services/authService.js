import api from "./api.js";

export const userRegister = async (data) => api.post("/auth/register", data);
export const userLogin = async (data) => api.post("/auth/login", data);
