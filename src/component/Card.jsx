import React from "react";
import "../App.css";
import { getImageFromTypeAndNumber } from "../common/cardImage.js";

export default function Card(props) {
  return (
    <div className="box">
      <img src={getImageFromTypeAndNumber(props.type, props.number)} alt="" />
    </div>
  );
}
