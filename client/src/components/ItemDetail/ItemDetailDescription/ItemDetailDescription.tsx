import style from "./ItemDetailDescription.module.scss";

interface ItemDetailDescriptionProps {
  description: string;
}

export const ItemDetailDescription: React.FC<ItemDetailDescriptionProps> = ({
  description,
}) => {
  return (
    <div className={style.descriptionStyle}>
      {description === "" ? null : (
        <>
          <div className={style.descriptionTitleContainer}>
            <span>Descripción del producto</span>
          </div>
          <div className={style.descriptionContainer}>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};
