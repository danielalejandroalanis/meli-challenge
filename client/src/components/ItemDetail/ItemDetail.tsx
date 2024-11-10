import { BuyButton } from "./BuyButton/BuyButton";
import { ItemDetailData } from "./ItemDetailData/ItemDetailData";
import { ItemDetailDescription } from "./ItemDetailDescription/ItemDetailDescription";
import { ItemDetailImage } from "./ItemDetailImage/ItemDetailImage";
import { ItemCategory } from "../ItemCategory/ItemCategory";
import style from "./ItemDetail.module.scss";
import { getCategories } from "../../services";
import { useEffect, useState } from "react";

interface ItemDetailProps {
  item: {
    category_id: string;
    picture: string;
    title: string;
    condition: string;
    sold_quantity: number;
    price: {
      currency: string;
      amount: number;
    };
  };
  description: string;
}

export const ItemDetail: React.FC<ItemDetailProps> = ({
  item,
  description,
}) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const id = item.category_id;
      const fetchedCategories = await getCategories(id);
      setCategories(fetchedCategories?.categories || []);
    };

    fetchCategories();
  }, [item.category_id]);

  return (
    <div className={style.divContainer}>
      <ItemCategory itemsCategories={categories} />
      <section className={style.itemDetailContainer}>
        <div className={style.leftColumn}>
          <ItemDetailImage picture={item.picture} title={item.title} />
          <ItemDetailDescription description={description} />
        </div>
        <div className={style.rightColumn}>
          <ItemDetailData
            condition={item.condition}
            soldQuantity={item.sold_quantity}
            title={item.title}
            currency={item.price.currency}
            amount={item.price.amount}
          />
          <BuyButton />
        </div>
      </section>
    </div>
  );
};
