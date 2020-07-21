import React from "react";
import "../App.css";
import Card from "./Card";

export default function Game() {
  return (
    <div>
      <div className="boxes">
        <div className="boxes-1">
          <div className="box-row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="boxes-2">
          <div className="box-row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="my-area">
        <div className="btns_grave">
          <div className="btns">
            <button>SET</button>
            <button className="reset-btn">RESET</button>
          </div>
          <div className="grave">
            <div className="mygrave">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="myboxes">
          <div className="box-row">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="black-boxes">
          <div className="box-row">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <button className="back-btn">BACK</button>
      </div>
    </div>
  );
}
