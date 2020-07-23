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

export default function Game() {
  const [resetDialog, setResetDialog] = useState(false);
  const history = useHistory();

  return (
    <div>
      <div className="boxes">
        <div className="boxes-1">
          <div className="box-row">
            <Card type="joker" />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card type="joker" />
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
