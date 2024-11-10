import { Link } from "react-router-dom";
import style from "./ItemCard.module.scss";
import { ItemData } from "./ItemData/ItemData";
import { ItemImage } from "./ItemImage/ItemImage";
import { ItemLocation } from "./ItemLocation/ItemLocation";

interface ItemCardProps {
  items: {
    id: string;
    picture: string;
    title: string;
    price: {
      currency: string;
      amount: number;
    };
    free_shipping: boolean;
  }[];
}

export const ItemCards: React.FC<ItemCardProps> = ({ items }) => {
  return (
    <div className={style.itemCardContainer}>
      {items.map((item) => (
        <Link to={`/items/${item.id}`} key={item.id} className={style.itemCard}>
          <ItemImage picture={item.picture} title={item.title} />
          <ItemData
            currency={item.price.currency}
            amount={item.price.amount}
            title={item.title}
            shipping={item.free_shipping}
          />
          <ItemLocation id={item.id} />
        </Link>
      ))}
    </div>
  );
};
