import React from "react";
import "./ProducsCategoryItem.css";
import logo from "../../images/dataArtLogo.png";

function ProducsCategoryItem({ title, description, price, date }) {
  return (
    <div className="box">
      <img src={logo} alt={logo} className="boxImg" />
      <h2 className="boxTitle">
        {title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}
      </h2>
      <div className="boxDate">{date}</div>
      <div className="boxPrice">{price + "$"}</div>
    </div>
  );
}

export default ProducsCategoryItem;
