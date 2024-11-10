import style from "./ItemData.module.scss";
import { LiaShippingFastSolid } from "react-icons/lia";

type ItemDataProps = {
  amount: number;
  currency: string;
  shipping?: boolean;
  title: string;
};

export const ItemData: React.FC<ItemDataProps> = ({
  amount,
  currency,
  shipping,
  title,
}) => {
  return (
    <div className={style.itemData}>
      <div className={style.priceShippingContainer}>
        <span>
          {Number(amount).toLocaleString("es-AR", {
            style: "currency",
            currency: currency,
          })}
        </span>
        {shipping ? (
          <LiaShippingFastSolid
            className={style.freeShipping}
            data-testid="shipping-icon"
          />
        ) : null}
      </div>
      <h2>{title}</h2>
    </div>
  );
};
