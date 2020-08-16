import React, { useState } from "react";
import "../App.css";
import GameCard from "./GameCard";
import SelfField from "./SelfField";
import OppField1 from "./OppField1";
import OppField2 from "./OppField2";
import { SPADE, CLOVER, DIAMOND, HEART, JOKER } from "../common/constant";
import GraveField from "./GraveField";
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

  const [field, setField] = useState({
    self: [],
    opp1: [],
    opp2: [],
    grave: [],
  });

  const [preField, setPreField] = useState(field);

  const history = useHistory();
  function getRandomCard(count) {
    let result = [];
    let tmpDeck = deck.concat();
    for (let i = 0; i < count; i++) {
      let arrayIndex = Math.floor(Math.random() * tmpDeck.length);
      result[i] = tmpDeck[arrayIndex];
      tmpDeck = tmpDeck.filter((deck) => {
        return !(
          deck.type === result[i].type && deck.number === result[i].number
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
          preDeck.type === result[i].type && preDeck.number === result[i].number
        );
      });
    }
    setDeck(returnDeck);
    return result;
  }
  //[NOTE:Redux化の段階でフィールドをリセットする用の関数が必要か確認]function clearField() {}
  return (
    <div>
      <div className="boxes">
        <div className="boxes-1">
          <OppField1
            fieldKey="opp1"
            fieldCard={field}
            fieldSetter={setField}
          ></OppField1>
        </div>
        <div className="boxes-2">
          <OppField2
            fieldKey="opp2"
            fieldCard={field}
            fieldSetter={setField}
          ></OppField2>
        </div>
      </div>
      <div className="my-area">
        <div className="btns_grave">
          <div className="btns">
            <Button
              disabled={deck.length <= 11}
              id="setButton"
              variant="contained"
              color="primary"
              onClick={() => {
                const randomCards = getRandomCard(15);
                setPreDeck(deck);
                setPreField(field);
                setField({
                  self: randomCards.slice(0, 5),
                  opp1: randomCards.slice(5, 10),
                  opp2: randomCards.slice(10, 15),
                  grave: field.grave,
                });
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
                    setField(preField);
                    const resetCards = resetRandomCard(15);
                    setField({
                      self: resetCards.slice(0, 5),
                      opp1: resetCards.slice(5, 10),
                      opp2: resetCards.slice(10, 15),
                      grave: field.grave,
                    });
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
              <GraveField
                fieldKey="grave"
                fieldCard={field}
                fieldSetter={setField}
              />
            </div>
          </div>
        </div>
        <div className="myboxes">
          <SelfField
            fieldKey="self"
            fieldCard={field}
            fieldSetter={setField}
          ></SelfField>
        </div>
        <div className="black-boxes">
          <div className="box-row">
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
          <div className="box-row">
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
          <div className="box-row">
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
          <div className="box-row">
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
          <div className="box-row">
            <GameCard />
            <GameCard />
            <GameCard />
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
