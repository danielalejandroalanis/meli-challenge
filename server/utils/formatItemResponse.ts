import {
  CategoryResponse,
  ItemData,
  ItemResponse,
} from "../interfaces/formatItems.interface";

function translateCondition(condition: string): string {
  if (condition === "new") {
    return "Nuevo";
  } else if (condition === "used") {
    return "Usado";
  } else {
    return "No especifica";
  }
}

function countDecimals(amount: number): number {
  const decimalPart = amount.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}

function formatResponseById(res: ItemData): ItemResponse {
  const response: ItemResponse = {
    id: res.id,
    title: res.title,
    price: {
      currency: res.currency_id,
      amount: res.price,
      decimals: countDecimals(res.price),
    },
    picture: res.pictures?.[0]?.url ?? res.thumbnail,
    condition: translateCondition(res.condition),
    free_shipping: res.shipping?.free_shipping ?? false,
    sold_quantity: res.sold_quantity ?? 0,
    category_id: res.category_id,
  };
  return response;
}

function formatResponseByQuery(res: ItemData[]): ItemResponse[] {
  return res.map(formatResponseById);
}

function formatCategories(res: CategoryResponse): string[] | string {
  const filters = res.filters;
  if (filters) {
    const categoryFilter = filters.find((filter) => filter.id === "category");
    if (categoryFilter) {
      const values = categoryFilter.values;
      if (values) {
        const categoryValue = values[0].path_from_root.map(
          (catVal) => catVal.name
        );
        return categoryValue;
      }
    }
  }
  return "N/A.";
}

export { formatResponseById, formatResponseByQuery, formatCategories };
