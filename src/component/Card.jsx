import React from "react";
import "../App.css";
import { getImageFromTypeAndNumber } from "../common/cardImage.js";

export default function Card(props) {
  return (
    <div className="box">
      {getImageFromTypeAndNumber(() => {
        return <img type={props.type} number={props.number} alt="" />;
      })}
    </div>
  );
}
