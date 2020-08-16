import React from "react";
import "../App.css";
import { getImageFromTypeAndNumber } from "../common/cardImage.js";

export default function SelectBoxCard(props) {
  return (
    <div className="box">
      <img
        src={
          props.type || props.number
            ? getImageFromTypeAndNumber(props.type, props.number)
            : null
        }
        alt=""
      />
    </div>
  );
}
