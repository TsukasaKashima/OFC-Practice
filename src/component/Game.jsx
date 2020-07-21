import React from "react";
import "../App.css";
import Card from "./Card";
import clover_1 from "../cards/clover_1.png";
import heart_1 from "../cards/heart_1.png";
import heart_2 from "../cards/heart_2.png";
import heart_3 from "../cards/heart_3.png";
import diamond_1 from "../cards/diamond_1.png";
import diamond_2 from "../cards/diamond_2.png";
import diamond_3 from "../cards/diamond_3.png";
import joker from "../cards/joker.png";

export default function Game(props) {
  return (
    <div>
      <div className="boxes">
        <div className="boxes-1">
          <div className="box-row">
            <Card />
            <Card />
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="box-row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="box-row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
        <div className="boxes-2">
          <div className="box-row">
            <div className="box">
              <img src={heart_1} alt="heart" />
            </div>
            <div className="box">
              <img src={heart_2} alt="heart" />
            </div>
            <div className="box">
              <img src={heart_3} alt="heart" />
            </div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="box-row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="box-row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
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
              <div className="grave-box">
                <img src={clover_1} alt="clover" />
              </div>
              <div className="grave-box"></div>
              <div className="grave-box"></div>
              <div className="grave-box"></div>
            </div>
          </div>
        </div>
        <div className="myboxes">
          <div className="box-row">
            <div className="mybox">
              <img src={diamond_1} alt="diamond" />
            </div>
            <div className="mybox">
              <img src={diamond_2} alt="diamond" />
            </div>
            <div className="mybox">
              <img src={diamond_3} alt="diamond" />
            </div>
          </div>
          <div className="box-row">
            <div className="mybox"></div>
            <div className="mybox"></div>
            <div className="mybox"></div>
            <div className="mybox"></div>
            <div className="mybox"></div>
          </div>
          <div className="box-row">
            <div className="mybox"></div>
            <div className="mybox"></div>
            <div className="mybox"></div>
            <div className="mybox"></div>
            <div className="mybox"></div>
          </div>
        </div>
        <div className="black-boxes">
          <div className="box-row">
            <div className="black-box">
              <img src={joker} alt="joker" />
            </div>
            <div className="black-box"></div>
            <div className="black-box"></div>
          </div>
          <div className="box-row">
            <div className="black-box"></div>
            <div className="black-box"></div>
            <div className="black-box"></div>
          </div>
          <div className="box-row">
            <div className="black-box"></div>
            <div className="black-box"></div>
            <div className="black-box"></div>
          </div>
          <div className="box-row">
            <div className="black-box"></div>
            <div className="black-box"></div>
            <div className="black-box"></div>
          </div>
          <div className="box-row">
            <div className="black-box"></div>
            <div className="black-box"></div>
            <div className="black-box"></div>
          </div>
        </div>
        <button className="back-btn">BACK</button>
      </div>
    </div>
  );
}
