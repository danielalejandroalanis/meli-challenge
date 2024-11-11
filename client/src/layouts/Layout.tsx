import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

import { Navbar } from "../components";

import style from "./Layout.module.scss";

interface LayoutProps {
  title: string;
  description?: string;
  keywords?: string;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <div className={style.layout}>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={
            description ||
            "Compra productos en Mercado Libre, la plataforma líder en comercio electrónico de Latinoamérica."
          }
        />
        <meta
          name="keywords"
          content={
            keywords ||
            "Mercado Libre, compras online, productos, tecnología, moda, hogar, herramientas"
          }
        />
      </Helmet>
      <Navbar />
      <main className={style.layout__content}>{children}</main>
    </div>
  );
};
