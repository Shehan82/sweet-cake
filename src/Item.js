import React from "react";
import { CardMedia } from "@material-ui/core";
import "./App.css";
import img from "./assets/images/cake.jpg";

function Item(props) {
  return (
    <div className="item_container">
      <div className="image_container">
        <img src={props.imgUrl} />
      </div>
      <div className="details_container">
        <div className="details_container_name">{props.name}</div>
        <div className="details_container_desc">{props.desc}</div>
        <div className="details_container_price">{props.price}</div>
      </div>
      <div className="button_container">Add to Cart</div>
    </div>
  );
}

export default Item;
