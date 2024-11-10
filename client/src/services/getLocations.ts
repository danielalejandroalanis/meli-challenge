import { api } from "./baseUrl";

export const getLocation = async (id: string) => {
  try {
    const response = await api.get(`/api/items/location/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
