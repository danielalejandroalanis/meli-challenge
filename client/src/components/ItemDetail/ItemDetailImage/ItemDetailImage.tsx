import style from "./ItemDetailImage.module.scss";

interface ItemDetailImageProps {
  picture: string;
  title: string;
}

export const ItemDetailImage: React.FC<ItemDetailImageProps> = ({
  picture,
  title,
}) => {
  return (
    <div className={style.itemDetailImgContainer}>
      <img
        src={picture}
        alt={title}
        style={{ objectFit: "contain" }}
        className={style.ImageStyle}
      />
    </div>
  );
};
