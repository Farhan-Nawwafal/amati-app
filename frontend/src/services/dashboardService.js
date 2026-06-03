import api from "./api.js";

export const getDashboardSummaryApi = async () => api.get("/dashboard/summary");