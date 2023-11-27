import React from "react";
import Image from "next/image";
import styles from "./categoryCard.css";

const CategoryCard = ({ src, name }) => {
  const navigate = () => {
    window.location.href = `/game/${name}`;
  };
  return (
    <div onClick={navigate} className="category-card">
      <Image src={src} height={100} width={100} />
      <h2>{name}</h2>
    </div>
  );
};

export default CategoryCard;
