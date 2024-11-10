interface BaseItem {
  id: string;
  title: string;
  condition: string;
  category_id?: string;
  sold_quantity?: number;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface ItemResponse extends BaseItem {
  price: Price;
  picture: string;
  free_shipping: boolean;
}

export interface ItemData extends BaseItem {
  currency_id: string;
  price: number;
  pictures?: Array<{ url: string }>;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
}

export interface CategoryResponse {
  filters: Array<{
    id: string;
    values: Array<{
      path_from_root: Array<{ name: string }>;
    }>;
  }>;
}
