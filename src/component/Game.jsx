import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "./Card";
import { SPADE, CLOVER, DIAMOND, HEART, JOKER } from "../common/constant";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { SPADE, CLOVER, HEART, DIAMOND, JOKER } from "../common/constant.js";

export default function Game() {
  function createCard() {
    const resultArray = [];
    for (let i = 1; i <= 13; i++) {
      resultArray.push({ type: SPADE, number: i });
      resultArray.push({ type: CLOVER, number: i });
      resultArray.push({ type: HEART, number: i });
      resultArray.push({ type: DIAMOND, number: i });
    }
    //[Todo:createCardはstateを見てjokerをpushするかどうか判断する（Redux化の際にstoreのstateを参照する）]
    resultArray.push({ type: JOKER });
    resultArray.push({ type: JOKER });
    return resultArray;
  }
  const [resetDialog, setResetDialog] = useState(false);
  const [deck, setDeck] = useState([...createCard()]);
  const history = useHistory();

  function getRandomCard(count) {
    let result = [];
    let tmpDeck = deck.concat();
    for (let i = 0; i < count; i++) {
      let arrayIndex = Math.floor(Math.random() * tmpDeck.length);
      result[i] = tmpDeck[arrayIndex];
      tmpDeck = tmpDeck.filter((deck) => {
        return !(
          deck.type === tmpDeck[arrayIndex].type &&
          deck.number === tmpDeck[arrayIndex].number
        );
      });
    }
    setDeck(tmpDeck);
    return result;
  }
  function deleteFromDeck() {
    const deleteDeck = deck.filter((deck) => {
      return deck !== getRandomCard();
    });
    setDeck(deleteDeck);
  }
  useEffect(() => {
    const card = getRandomCard();
    deleteFromDeck(card);
  }, []);

  useEffect(() => {
    console.log(getRandomCard(3));
  }, []);

  return (
    <div>
      <div className="boxes">
        <div className="boxes-1">
          <div className="box-row">
            <Card type={DIAMOND} number={9} />
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setDeck(getRandomCard(1));
              }}
            >
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
              <Card type={CLOVER} number={10} />
              <Card type={CLOVER} number={11} />
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
