import { api } from "./baseUrl";

export const getItemById = async (id: string) => {
  try {
    const response = await api.get(`/api/items/${id}`);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
