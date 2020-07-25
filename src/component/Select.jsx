import React from "react";
import "../App.css";
import Card from "./Card";
import { JOKER } from "../common/constant";

export default function Select() {
  return (
    <div className="box-row">
      <Card type={JOKER} />
      <Card type={JOKER} />
      <Card type={JOKER} />
      <Card type={JOKER} />
    </div>
  );
}
