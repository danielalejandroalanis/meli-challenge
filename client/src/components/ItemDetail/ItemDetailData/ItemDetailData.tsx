import style from "./ItemDetailData.module.scss";

interface ItemDetailDataProps {
  condition: string;
  soldQuantity: number;
  title: string;
  amount: number;
  currency: string;
}

export const ItemDetailData: React.FC<ItemDetailDataProps> = ({
  condition,
  soldQuantity,
  title,
  amount,
  currency,
}) => {
  return (
    <div className={style.dataContainer}>
      <div className={style.conditionContainer}>
        <h3>
          {condition}
          {soldQuantity !== 0 ? (
            <>
              {" - "}
              {soldQuantity}
              {" vendidos"}
            </>
          ) : null}
        </h3>
      </div>
      <div className={style.titleContainer}>
        <h1>{title}</h1>
      </div>
      <div className={style.amountContainer}>
        <h2>
          {Number(amount).toLocaleString("es-AR", {
            style: "currency",
            currency: currency,
          })}
        </h2>
      </div>
    </div>
  );
};
