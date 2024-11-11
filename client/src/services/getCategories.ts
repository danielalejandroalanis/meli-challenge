import { api } from "./baseUrl";

export const getCategories = async (id: string) => {
  try {
    const response = await api.get(`/api/categories/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
