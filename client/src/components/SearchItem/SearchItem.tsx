/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./SearchItem.module.scss";
import { ItemCards } from "./ItemCards/ItemCards";
import { ItemCategory } from "../ItemCategory/ItemCategory";

interface SearchItemProps {
  categories: string[];
  items: any[];
}

export const SearchItem: React.FC<SearchItemProps> = ({
  categories,
  items,
}) => {
  return (
    <section className={style.itemsContainer}>
      <ItemCategory itemsCategories={categories} />
      <ItemCards items={items} />
    </section>
  );
};
