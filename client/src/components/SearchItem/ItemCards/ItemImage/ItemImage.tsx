import style from "./ItemImage.module.scss";

interface ItemImageProps {
  picture: string;
  title: string;
}

export const ItemImage: React.FC<ItemImageProps> = ({ picture, title }) => {
  return (
    <div className={style.itemImg}>
      <img
        src={picture}
        alt={title}
        style={{ objectFit: "contain" }}
        className={style.ImageStyle}
      />
    </div>
  );
};
