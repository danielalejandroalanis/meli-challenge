import React from "react";
import { Logo } from "./Logo/Logo";
import { SearchBox } from "./SearchBox/SearchBox";
import style from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <nav className={style.navbarContainer}>
      <div className={style.contentContainer}>
        <div className={style.logoContainer}>
          <Logo />
        </div>
        <div className={style.searchBarContainer}>
          <SearchBox />
        </div>
      </div>
    </nav>
  );
};
