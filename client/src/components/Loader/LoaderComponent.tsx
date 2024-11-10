import React from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

export const LoaderComponent: React.FC<LoaderProps> = ({
  size = "medium",
  color = "#007bff",
}) => {
  return (
    <div className={`${styles.loaderContainer} ${styles[size]}`}>
      <div
        className={styles.spinner}
        style={{ borderColor: `${color} transparent transparent transparent` }}
      />
    </div>
  );
};
