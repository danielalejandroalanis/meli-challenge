import { Request, Response } from "express";
import axios from "axios";
import {
  formatCategories,
  formatResponseByQuery,
  formatResponseById,
} from "../utils/formatItemResponse";
import { ItemResponse } from "../interfaces/items.interface";
import { handleError } from "../errors/handle.errors";

const getItemById = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id;
  
    try {
      if (!id) {
        throw new Error("Falta el parámetro ID.");
      }
  
      const [responseItem, responseDescription] = await Promise.all([
        axios.get(`https://api.mercadolibre.com/items/${id}`),
        axios.get(`https://api.mercadolibre.com/items/${id}/description`),
      ]);
  
      const items = formatResponseById(responseItem.data);
      const location = responseItem.data.seller_address.state.name;
  
      const result: ItemResponse = {
        author: {
          name: "Daniel",
          lastname: "Alanis",
        },
        items,
        description: responseDescription.data.plain_text,
        location: location,
      };
  
      res.json(result);
    } catch (err) {
      handleError(res, err);
    }
  };

const getItemsByQuery = async (req: Request, res: Response): Promise<void> => {
  const query: string = req.query.q as string;
  try {
    if (!query) {
      throw new Error("Falta el parámetro de búsqueda.");
    }

    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
    );

    if (response.data.results.length === 0) {
      throw new Error(
        "No fueron encontrados resultados para la búsqueda proporcionada."
      );
    }

    const items = formatResponseByQuery(response.data.results);
    const categories = formatCategories(response.data);

    const result: ItemResponse = {
      author: {
        name: "Daniel",
        lastname: "Alanis",
      },
      categories: categories
        ? Array.isArray(categories)
          ? categories
          : [categories]
        : undefined,
      items,
    };

    res.json(result);
  } catch (err) {
    handleError(res, err);
  }
};

const getItemLocation = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id;
  
    try {
      if (!id) {
        throw new Error("Falta el parámetro ID.");
      }
  
      const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      const location = response.data.seller_address.state.name;
  
      res.json({ location });
    } catch (err) {
      handleError(res, err);
    }
  };

export { getItemById, getItemsByQuery, getItemLocation };
