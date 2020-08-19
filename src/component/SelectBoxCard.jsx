import React, { useEffect } from "react";
import "../App.css";
import { getImageFromTypeAndNumber } from "../common/cardImage.js";

export default function SelectBoxCard(props) {
  /*function deleteBtn() {
    let checkBtn = document.getElementById("btn");
    let checkImg = document.getElementsById("img");
    if (checkImg.src === null) {
      checkBtn.disabled = true;
    } else checkBtn.disabled = false;
  }
  useEffect(() => {
    return (
      <button
        id="btn"
        disabled={true}
        onClick={() => {
          props.onClick(props.type, props.number, props.index);
        }}
      >
        ✖️
      </button>
    );
  }, [props.type, props.number, props.index]);*/

  return (
    <div className="box select-box-card">
      <button
        id="btn"
        disabled={true}
        onClick={() => {
          props.onClick(props.type, props.number, props.index);
        }}
      >
        ✖️
      </button>
      <img
        id="img"
        onClick={() => {
          props.onClick(props.type, props.number, props.index);
        }}
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
