import { useState, useEffect } from "react";
import { getLocation } from "../../../../services";
import style from "./ItemLocation.module.scss";

interface ItemLocationProps {
  id: string;
}
export const ItemLocation: React.FC<ItemLocationProps> = ({ id }) => {
  const [location, setLocation] = useState<{ location?: string }>({});

  useEffect(() => {
    const fetchLocation = async () => {
      const loc = await getLocation(id);
      if (loc) {
        setLocation({ location: loc.location });
      }
    };
    fetchLocation();
  }, [id]);

  return (
    <div className={style.itemLocation}>
      <h3>{location?.location || "No disponible"}</h3>
    </div>
  );
};
