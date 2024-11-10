import React from "react";
import { Link } from "react-router-dom";

import style from "./Logo.module.scss";

export const Logo: React.FC = () => {
  return (
    <div>
      <Link to={"/"}>
        <div className={style.imgContainer}>
          <img
            src="/logo-ml.png"
            alt="Logo de mercado libre"
            style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
          />
        </div>
      </Link>
    </div>
  );
};
