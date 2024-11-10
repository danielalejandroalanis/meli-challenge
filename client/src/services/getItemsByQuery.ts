import { api } from "./baseUrl";

export const getItemsByQuery = async (searchParams: string) => {
  return await api.get(`/api/items?q=${searchParams}`);
};
