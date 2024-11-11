import { api } from "./baseUrl";

export const getItemsByQuery = async (searchParams: string) => {
  try {
    const response = await api.get(
      `/api/items?q=${encodeURIComponent(searchParams)}`,
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
