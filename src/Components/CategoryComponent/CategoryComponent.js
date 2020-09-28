import React from "react";
import "./CategoryComponent.css";

function CategoryComponent({ title }) {
  return (
    <div className="categoryComponentBox">
      <img className="categoryComponentImg" alt="img" />
      <h2 className="categoryComponentTitle">{title.toUpperCase()}</h2>
    </div>
  );
}

export default CategoryComponent;
