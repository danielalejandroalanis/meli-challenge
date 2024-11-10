import style from "./BuyButton.module.scss";

export const BuyButton: React.FC = () => {
  return (
    <div className={style.buttonStyle}>
      <button>Comprar</button>
    </div>
  );
};
