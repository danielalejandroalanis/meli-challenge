import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import style from "./SearchBox.module.scss";

export const SearchBox: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/items?search=${query}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={style.formStyle}
      data-testid="search-form"
    >
      <input
        type="text"
        value={query}
        placeholder="Nunca dejes de buscar"
        onChange={handleChange}
        className={style.inputStyle}
      />
      <button name="navButton" type="submit" className={style.buttonStyle}>
        <CiSearch className={style.icoSize} />
      </button>
    </form>
  );
};
