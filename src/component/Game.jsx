import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import spade_1 from "../cards/spade_1.png";
import spade_2 from "../cards/spade_2.png";
import spade_3 from "../cards/spade_3.png";
import spade_4 from "../cards/spade_4.png";
import spade_5 from "../cards/spade_5.png";
import spade_6 from "../cards/spade_6.png";
import spade_7 from "../cards/spade_7.png";
import spade_8 from "../cards/spade_8.png";
import spade_9 from "../cards/spade_9.png";
import spade_10 from "../cards/spade_10.png";
import spade_11 from "../cards/spade_11.png";
import spade_12 from "../cards/spade_12.png";
import spade_13 from "../cards/spade_13.png";

import clover_1 from "../cards/clover_1.png";
import clover_2 from "../cards/clover_2.png";
import clover_3 from "../cards/clover_3.png";
import clover_4 from "../cards/clover_4.png";
import clover_5 from "../cards/clover_5.png";
import clover_6 from "../cards/clover_6.png";
import clover_7 from "../cards/clover_7.png";
import clover_8 from "../cards/clover_8.png";
import clover_9 from "../cards/clover_9.png";
import clover_10 from "../cards/clover_10.png";
import clover_11 from "../cards/clover_11.png";
import clover_12 from "../cards/clover_12.png";
import clover_13 from "../cards/clover_13.png";

import heart_1 from "../cards/heart_1.png";
import heart_2 from "../cards/heart_2.png";
import heart_3 from "../cards/heart_3.png";
import heart_4 from "../cards/heart_4.png";
import heart_5 from "../cards/heart_5.png";
import heart_6 from "../cards/heart_6.png";
import heart_7 from "../cards/heart_7.png";
import heart_8 from "../cards/heart_8.png";
import heart_9 from "../cards/heart_9.png";
import heart_10 from "../cards/heart_10.png";
import heart_11 from "../cards/heart_11.png";
import heart_12 from "../cards/heart_12.png";
import heart_13 from "../cards/heart_13.png";

import diamond_1 from "../cards/diamond_1.png";
import diamond_2 from "../cards/diamond_2.png";
import diamond_3 from "../cards/diamond_3.png";
import diamond_4 from "../cards/diamond_1.png";
import diamond_5 from "../cards/diamond_2.png";
import diamond_6 from "../cards/diamond_3.png";
import diamond_7 from "../cards/diamond_1.png";
import diamond_8 from "../cards/diamond_2.png";
import diamond_9 from "../cards/diamond_3.png";
import diamond_10 from "../cards/diamond_1.png";
import diamond_11 from "../cards/diamond_2.png";
import diamond_12 from "../cards/diamond_3.png";
import diamond_13 from "../cards/diamond_1.png";
import joker from "../cards/joker.png";

export default function Game() {
  const [resetDialog, setResetDialog] = useState(false);
  const history = useHistory();

  return (
    <div>
      <div className="boxes">
        <div className="boxes-1">
          <div className="box-row">
            <Card src={spade_1} />
            <Card src={diamond_10} />
            <Card />
            <Card src={heart_5} />
            <Card src={clover_12} />
          </div>
          <div className="box-row">
            <Card src={joker} />
            <Card src={clover_11} />
            <Card src={clover_13} />
            <Card src={heart_3} />
            <Card src={heart_1} />
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
            <Card src={spade_11} />
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
            <Button variant="contained" color="primary">
              SET
            </Button>
            <Button
              className="reset-btn"
              variant="contained"
              color="primary"
              onClick={() => {
                setResetDialog(true);
              }}
            >
              RESET
            </Button>
            <Dialog open={resetDialog}>
              <DialogContent>
                <DialogContentText>モードを選択してください</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    setResetDialog(true);
                  }}
                >
                  ランダム
                </Button>
                <Button
                  onClick={() => {
                    setResetDialog(true);
                  }}
                >
                  自由に選択
                </Button>
                <Button
                  onClick={() => {
                    setResetDialog(false);
                  }}
                >
                  キャンセル
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="grave">
            <div className="mygrave">
              <Card src={clover_7} />
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
            <Card src={heart_6} />
            <Card src={heart_7} />
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
            <Card src={heart_8} />
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
        <Button
          className="back-btn"
          variant="contained"
          color="secondary"
          onClick={() => {
            history.push("/");
          }}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
