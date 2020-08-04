import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import SelfField from "./SelfField";
import OppField1 from "./OppField1";
import OppField2 from "./OppField2";
import { SPADE, CLOVER, DIAMOND, HEART, JOKER } from "../common/constant";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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

  const [deck, setDeck] = useState(createCard());
  const [preDeck, setPreDeck] = useState(deck);

  const [selfField, setSelfField] = useState([]);
  const [preSelfField, setPreSelfField] = useState(selfField);

  const [oppField1, setOppField1] = useState([]);
  const [preOppField1, setPreOppField1] = useState(oppField1);

  const [oppField2, setOppField2] = useState([]);
  const [preOppField2, setPreOppField2] = useState(oppField2);

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
  function resetRandomCard(count) {
    let result = [];
    let returnDeck = preDeck.concat();
    for (let i = 0; i < count; i++) {
      let arrayIndex = Math.floor(Math.random() * returnDeck.length);
      result[i] = returnDeck[arrayIndex];
      returnDeck = returnDeck.filter((preDeck) => {
        return !(
          preDeck.type === returnDeck[arrayIndex].type &&
          preDeck.number === returnDeck[arrayIndex].number
        );
      });
    }
    setDeck(returnDeck);
    return result;
  }
  return (
    <div>
      <div className="boxes">
        <div className="boxes-1">
          <OppField1 fieldCard={oppField1}></OppField1>
        </div>
        <div className="boxes-2">
          <OppField2 fieldCard={oppField2}></OppField2>
        </div>
      </div>
      <div className="my-area">
        <div className="btns_grave">
          <div className="btns">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const randomCards = getRandomCard(15);
                setPreDeck(deck);
                setPreSelfField(selfField);
                setPreOppField1(oppField1);
                setPreOppField2(oppField2);
                setSelfField(randomCards.slice(0, 5));
                setOppField1(randomCards.slice(5, 10));
                setOppField2(randomCards.slice(10, 15));
                console.log(deck);
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
                    setResetDialog(false);
                    setDeck(preDeck);
                    setSelfField(preSelfField);
                    setOppField1(preOppField1);
                    setOppField2(preOppField2);
                    const resetCards = resetRandomCard(15);
                    setSelfField(resetCards.slice(0, 5));
                    setOppField1(resetCards.slice(5, 10));
                    setOppField2(resetCards.slice(10, 15));
                    console.log(deck);
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
              <Card />
            </div>
          </div>
        </div>
        <div className="myboxes">
          <SelfField fieldCard={selfField}></SelfField>
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
