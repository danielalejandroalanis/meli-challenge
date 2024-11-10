import { useLocation } from "react-router-dom";

import { useGetProductsByQuery } from "../hooks";

import { LoaderComponent, SearchItem } from "../components";

import { Layout } from "../layouts";

export const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  const { items, loading, categories } = useGetProductsByQuery(searchQuery);

  return (
    <Layout
      title={`${searchQuery} | Búsqueda en Mercado Libre`}
      description={`Resultados de búsqueda para "${searchQuery}" en Mercado Libre. Encuentra los mejores productos relacionados.`}
      keywords={`${searchQuery}, búsqueda, productos, Mercado Libre, compras online`}
    >
      {loading ? (
        <LoaderComponent size="medium" />
      ) : (
        <SearchItem categories={categories} items={items} />
      )}
    </Layout>
  );
};
