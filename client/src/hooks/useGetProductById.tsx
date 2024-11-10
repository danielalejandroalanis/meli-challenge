/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getItemById } from "../services";

export const useGetProductById = (id: string) => {
  const [item, setItem] = useState<{
    items: any;
    authors: { name: string; lastname: string };
    description: string;
  }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemById(id!)
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { item, loading };
};
