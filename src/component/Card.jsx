import React from "react";
import "../App.css";

export default function Card(props) {
  return (
    <div className="box">
      <img src={props.src} alt="" />
    </div>
  );
}
