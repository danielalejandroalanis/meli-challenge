import { useEffect, useState } from "react";

import { getItemsByQuery } from "../services";

import { ItemData } from "../interfaces/items.interface";

interface ApiResponse {
  data: {
    items: ItemData[];
    categories: string[];
  };
}

export const useGetProductsByQuery = (searchQuery: string) => {
  const [items, setItems] = useState<ItemData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getItemsByQuery(searchQuery)
      .then((res: ApiResponse) => {
        setItems(res.data.items);
        setCategories(res.data.categories);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery]);

  return { items, categories, loading, error };
};
