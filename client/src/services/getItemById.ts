import { api } from "./baseUrl";

export const getItemById = async (id: string) => {
  return await api.get(`/api/items/${id}`);
};
