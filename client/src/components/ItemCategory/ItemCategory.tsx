import style from "./ItemCategory.module.scss";

interface ItemCategoryProps {
  itemsCategories: string[];
}

export const ItemCategory: React.FC<ItemCategoryProps> = ({
  itemsCategories,
}) => {
  return (
    <div className={style.categoryContainer}>
      {itemsCategories.map((category, i) => (
        <span key={category}>
          {i === itemsCategories.length - 1 ? (
            <span className={style.lastCategorySpan}>{category}</span>
          ) : (
            <span>
              {category} {" > "}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};
