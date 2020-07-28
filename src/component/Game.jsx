import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import { SPADE, CLOVER, DIAMOND, HEART, JOKER } from "../common/constant";
import cardImage from "../common/cardImage";
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
  const [deck, setDeck] = useState([
    {
      number: 1,
      type: SPADE,
    },
    {
      number: 2,
      type: SPADE,
    },
    {
      number: 3,
      type: SPADE,
    },
    {
      number: 4,
      type: SPADE,
    },
    {
      number: 5,
      type: SPADE,
    },
    {
      number: 6,
      type: SPADE,
    },
    {
      number: 7,
      type: SPADE,
    },
    {
      number: 8,
      type: SPADE,
    },
    {
      number: 9,
      type: SPADE,
    },
    {
      number: 10,
      type: SPADE,
    },
    {
      number: 11,
      type: SPADE,
    },
    {
      number: 12,
      type: SPADE,
    },
    {
      number: 13,
      type: SPADE,
    },
  ]);
  const history = useHistory();
  function getRandomCard() {
    return deck[Math.floor(Math.random() * deck.length)];
  }
  function deleteFromDeck() {
    const deleteDeck = deck.filter((deck) => {
      return deck !== getRandomCard();
    });
    setDeck(deleteDeck);
  }
  return (
    <div>
      <div className="boxes">
        <div className="boxes-1">
          <div className="box-row">
            <Card type={SPADE} number={13} />
            <Card type={JOKER} />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card type={CLOVER} number={3} />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card type={DIAMOND} number={11} />
            <Card />
            <Card />
          </div>
        </div>
        <div className="boxes-2">
          <div className="box-row">
            <Card type={DIAMOND} number={4} />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="box-row">
            <Card />
            <Card type={HEART} number={13} />
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
                    history.push("/select");
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
              <Card type={CLOVER} number={7} />
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
            <Card type={DIAMOND} number={8} />
            <Card type={CLOVER} number={12} />
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
            <Card type={DIAMOND} number={13} />
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
