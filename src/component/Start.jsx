import React from "react";
import "../App.css";
import { Button } from "@material-ui/core";

export default function Start() {
  return (
    <div className="title">
      <h1>OFC検証アプリ</h1>
      <Button className="start-left" variant="contained" color="primary">
        54枚
      </Button>
      <Button className="start-right" variant="contained" color="primary">
        52枚(ジョーカー抜き)
      </Button>
    </div>
  );
}
