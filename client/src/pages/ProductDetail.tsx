import { useParams } from "react-router-dom";

import { ItemDetail, LoaderComponent } from "../components";

import { Layout } from "../layouts";

import { useGetProductById } from "../hooks";

export const ProductDetail = () => {
  const { id } = useParams();

  const { item, loading } = useGetProductById(id!);

  return (
    <Layout
      title={`${item?.items.title} | Mercado Libre`}
      description={`Envíos gratis en el día. Compra ${item?.items.title} en cuotas sin interés. Conoce nuestras ofertas y promociones.`}
      keywords={`${item?.items.title}, compras en linea, tienda online, ventas online, envios rapidos, envios gratis, mercadolibre, productos`}
    >
      {loading ? (
        <LoaderComponent size="medium" />
      ) : (
        <ItemDetail item={item?.items} description={item?.description || ""} />
      )}
    </Layout>
  );
};
