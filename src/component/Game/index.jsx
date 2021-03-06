import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import GameCard from "./GameCard";
import SelfField from "./SelfField";
import MyCards from "./MyCards";
import OppField from "./OppField";
import GraveField from "./GraveField";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AppContext } from "../../context/AppContext";

export default function Game(props) {
  const { selectedCards, setSelectedCards } = useContext(AppContext);
  const { deck, setDeck } = useContext(AppContext);
  const { preDeck, setPreDeck } = useContext(AppContext);
  const { createCard } = useContext(AppContext);
  const { existJoker } = useContext(AppContext);

  const [resetDialog, setResetDialog] = useState(false);

  const defaultCardInformation = { type: undefined, number: undefined };

  const [field, setField] = useState({
    self: Array(16).fill(defaultCardInformation),
    myCards: Array(3).fill(defaultCardInformation),
    opp1: Array(13).fill(defaultCardInformation),
    opp2: Array(13).fill(defaultCardInformation),
    grave: Array(4).fill(defaultCardInformation),
    selected: [],
  });
  useEffect(() => {
    const tmpField = Object.assign({}, field);
    tmpField.selected = selectedCards;
    setField(tmpField);
  }, [selectedCards]);

  const [preField, setPreField] = useState(field);
  const history = useHistory();

  const [countClick, setCountClick] = useState(0);
  function incrementCount() {
    setCountClick(countClick + 1);
  }
  const countSelfUndifined = field.self.filter((card) => {
    return card.type === undefined;
  });
  const countMyCardsUndifined = field.myCards.filter((card) => {
    return card.type === undefined;
  });
  const countOppUndifined = field.opp1.filter((card) => {
    return card.type === undefined;
  });

  function changeCardByClick() {
    if (countSelfUndifined.length <= 11) {
      const changeCards = getRandomCard(10);
      setField({
        self: concatFieldFromRandomCards(field.self, changeCards.slice(0, 0)),
        myCards: concatFieldFromRandomCards(
          field.myCards,
          changeCards.slice(0, 3)
        ),
        opp1: concatFieldFromRandomCards(field.opp1, changeCards.slice(3, 5)),
        opp2: concatFieldFromRandomCards(field.opp2, changeCards.slice(5, 7)),
        grave: concatFieldFromRandomCards(field.grave, changeCards.slice(0, 0)),
        selected: field.selected,
      });
    }
    if (countSelfUndifined.length <= 11 && countOppUndifined.length >= 13) {
      const changeCards = getRandomCard(17);
      setField({
        self: concatFieldFromRandomCards(field.self, changeCards.slice(0, 0)),
        myCards: concatFieldFromRandomCards(
          field.myCards,
          changeCards.slice(0, 3)
        ),
        opp1: concatFieldFromRandomCards(field.opp1, changeCards.slice(3, 10)),
        opp2: concatFieldFromRandomCards(field.opp2, changeCards.slice(10, 17)),
        grave: concatFieldFromRandomCards(field.grave, changeCards.slice(0, 0)),
        selected: field.selected,
      });
    }
    if (countSelfUndifined.length <= 9 && countOppUndifined.length >= 13) {
      const changeCards = getRandomCard(21);
      setField({
        self: concatFieldFromRandomCards(field.self, changeCards.slice(0, 0)),
        myCards: concatFieldFromRandomCards(
          field.myCards,
          changeCards.slice(0, 3)
        ),
        opp1: concatFieldFromRandomCards(field.opp1, changeCards.slice(3, 12)),
        opp2: concatFieldFromRandomCards(field.opp2, changeCards.slice(12, 21)),
        grave: concatFieldFromRandomCards(field.grave, changeCards.slice(0, 0)),
        selected: field.selected,
      });
    }
    if (countSelfUndifined.length <= 7 && countOppUndifined.length >= 13) {
      const changeCards = getRandomCard(23);
      setField({
        self: concatFieldFromRandomCards(field.self, changeCards.slice(0, 0)),
        myCards: concatFieldFromRandomCards(
          field.myCards,
          changeCards.slice(0, 3)
        ),
        opp1: concatFieldFromRandomCards(field.opp1, changeCards.slice(3, 14)),
        opp2: concatFieldFromRandomCards(field.opp2, changeCards.slice(12, 23)),
        grave: concatFieldFromRandomCards(field.grave, changeCards.slice(0, 0)),
        selected: field.selected,
      });
    }
    if (countSelfUndifined.length <= 5 && countOppUndifined.length >= 13) {
      const changeCards = getRandomCard(25);
      setField({
        self: concatFieldFromRandomCards(field.self, changeCards.slice(0, 0)),
        myCards: concatFieldFromRandomCards(
          field.myCards,
          changeCards.slice(0, 3)
        ),
        opp1: concatFieldFromRandomCards(field.opp1, changeCards.slice(3, 16)),
        opp2: concatFieldFromRandomCards(field.opp2, changeCards.slice(12, 25)),
        grave: concatFieldFromRandomCards(field.grave, changeCards.slice(0, 0)),
        selected: field.selected,
      });
    } else if (countSelfUndifined.length > 11) {
      const changeCardsFirst = getRandomCard(15);
      setField({
        self: concatFieldFromRandomCards(
          field.self,
          changeCardsFirst.slice(0, 5)
        ),
        myCards: concatFieldFromRandomCards(
          field.myCards,
          changeCardsFirst.slice(5, 5)
        ),
        opp1: concatFieldFromRandomCards(
          field.opp1,
          changeCardsFirst.slice(5, 10)
        ),
        opp2: concatFieldFromRandomCards(
          field.opp2,
          changeCardsFirst.slice(10, 15)
        ),
        grave: concatFieldFromRandomCards(
          field.grave,
          changeCardsFirst.slice(0, 0)
        ),
        selected: field.selected,
      });
    }
  }
  function resetCardByClick() {
    if (countSelfUndifined.length <= 11 && countClick > 1) {
      const changeCards = resetRandomCard(7);
      const resetedField = {
        self: concatFieldFromRandomCards(
          preField.self,
          changeCards.slice(0, 0)
        ),
        myCards: concatFieldFromRandomCards(
          preField.myCards,
          changeCards.slice(0, 3)
        ),
        opp1: concatFieldFromRandomCards(
          preField.opp1,
          changeCards.slice(3, 5)
        ),
        opp2: concatFieldFromRandomCards(
          preField.opp2,
          changeCards.slice(5, 7)
        ),
        grave: concatFieldFromRandomCards(
          preField.grave,
          changeCards.slice(0, 0)
        ),
        selected: preField.selected,
      };
      setField(resetedField);
    }
    if (
      (countSelfUndifined.length === 11 ||
        countSelfUndifined.length === 10 ||
        (countSelfUndifined.length === 9 &&
          countMyCardsUndifined.length >= 2)) &&
      countClick === 1
    ) {
      const changeCards = resetRandomCard(17);
      setField({
        self: concatFieldFromRandomCards(
          preField.self,
          changeCards.slice(0, 0)
        ),
        myCards: concatFieldFromRandomCards(
          preField.myCards,
          changeCards.slice(0, 3)
        ),
        opp1: concatFieldFromRandomCards(
          preField.opp1,
          changeCards.slice(3, 10)
        ),
        opp2: concatFieldFromRandomCards(
          preField.opp2,
          changeCards.slice(10, 17)
        ),
        grave: concatFieldFromRandomCards(
          preField.grave,
          changeCards.slice(0, 0)
        ),
        selected: preField.selected,
      });
    }
    if (
      //219行目の書き方っぽい
      (countSelfUndifined.length === 9 &&
        countMyCardsUndifined.length === 0 &&
        countClick === 1) ||
      ((countSelfUndifined.length === 8 ||
        countSelfUndifined.length === 7 ||
        (countSelfUndifined.length === 6 &&
          countMyCardsUndifined.length >= 2)) &&
        countClick === 1)
    ) {
      const changeCards = resetRandomCard(21);
      setField({
        self: concatFieldFromRandomCards(
          preField.self,
          changeCards.slice(0, 0)
        ),
        myCards: concatFieldFromRandomCards(
          preField.myCards,
          changeCards.slice(0, 3)
        ),
        opp1: concatFieldFromRandomCards(
          preField.opp1,
          changeCards.slice(3, 12)
        ),
        opp2: concatFieldFromRandomCards(
          preField.opp2,
          changeCards.slice(12, 21)
        ),
        grave: concatFieldFromRandomCards(
          preField.grave,
          changeCards.slice(0, 0)
        ),
        selected: preField.selected,
      });
    }
    if (
      (countSelfUndifined.length === 7 &&
        countMyCardsUndifined.length === 0 &&
        countClick === 1) ||
      ((countSelfUndifined.length === 6 ||
        countSelfUndifined.length === 5 ||
        (countSelfUndifined.length === 4 &&
          countMyCardsUndifined.length >= 2)) &&
        countClick === 1)
    ) {
      const changeCards = resetRandomCard(25);
      setField({
        self: concatFieldFromRandomCards(
          preField.self,
          changeCards.slice(0, 0)
        ),
        myCards: concatFieldFromRandomCards(
          preField.myCards,
          changeCards.slice(0, 3)
        ),
        opp1: concatFieldFromRandomCards(
          preField.opp1,
          changeCards.slice(3, 14)
        ),
        opp2: concatFieldFromRandomCards(
          preField.opp2,
          changeCards.slice(14, 25)
        ),
        grave: concatFieldFromRandomCards(
          preField.grave,
          changeCards.slice(0, 0)
        ),
        selected: preField.selected,
      });
    }
    if (
      (countSelfUndifined.length === 5 &&
        countMyCardsUndifined.length === 0 &&
        countClick === 1) ||
      ((countSelfUndifined.length === 4 ||
        countSelfUndifined.length === 3 ||
        (countSelfUndifined.length === 2 &&
          countMyCardsUndifined.length >= 2)) &&
        countClick === 1)
    ) {
      const changeCards = resetRandomCard(29);
      setField({
        self: concatFieldFromRandomCards(
          preField.self,
          changeCards.slice(0, 0)
        ),
        myCards: concatFieldFromRandomCards(
          preField.myCards,
          changeCards.slice(0, 3)
        ),
        opp1: concatFieldFromRandomCards(
          preField.opp1,
          changeCards.slice(3, 16)
        ),
        opp2: concatFieldFromRandomCards(
          preField.opp2,
          changeCards.slice(16, 29)
        ),
        grave: concatFieldFromRandomCards(
          preField.grave,
          changeCards.slice(0, 0)
        ),
        selected: preField.selected,
      });
    } else if (
      countSelfUndifined.length >= 11 &&
      countMyCardsUndifined.length === 3
    ) {
      const changeCards = resetRandomCard(15);
      const resetedField = {
        self: concatFieldFromRandomCards(
          preField.self,
          changeCards.slice(0, 5)
        ),
        myCards: concatFieldFromRandomCards(
          preField.myCards,
          changeCards.slice(5, 5)
        ),
        opp1: concatFieldFromRandomCards(
          preField.opp1,
          changeCards.slice(5, 10)
        ),
        opp2: concatFieldFromRandomCards(
          preField.opp2,
          changeCards.slice(10, 15)
        ),
        grave: concatFieldFromRandomCards(
          preField.grave,
          changeCards.slice(0, 0)
        ),
        selected: preField.selected,
      };
      setField(resetedField);
    }
  }
  function concatFieldFromRandomCards(fieldCards, randomCards) {
    const result = fieldCards.concat();
    randomCards.forEach((randomCard) => {
      const index = result.findIndex((fieldCard) => {
        return fieldCard.type === undefined && fieldCard.number === undefined;
      });
      if (index !== -1) {
        result[index] = randomCard;
      }
    });
    return result;
  }
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
  console.log(countMyCardsUndifined.length);
  return (
    <div>
      <div className="boxes">
        <div className="boxes-1">
          <OppField
            fieldKey="opp1"
            fieldCard={field}
            fieldSetter={setField}
            data={props.cardInformation}
          />
        </div>
        {props.memberCount === 3 && (
          <div className="boxes-2">
            <OppField
              fieldKey="opp2"
              fieldCard={field}
              fieldSetter={setField}
            />
          </div>
        )}
      </div>
      <div className="my-area">
        <div className="btns_grave">
          <div className="btns">
            <Button
              disabled={
                countSelfUndifined.length === 3 ||
                countClick === 5 ||
                countMyCardsUndifined.length < 3
              }
              id="setButton"
              variant="contained"
              color="primary"
              onClick={() => {
                setPreDeck(deck);
                setPreField(field);
                changeCardByClick();
                incrementCount();
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
                  disabled={countClick === 0}
                  onClick={() => {
                    setResetDialog(false);
                    resetCardByClick();
                  }}
                >
                  ランダム
                </Button>
                <Button
                  onClick={() => {
                    setResetDialog(true);
                    history.push("/select");
                    setSelectedCards([]);
                    setDeck(createCard(existJoker));
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
          <SelfField fieldKey="self" fieldCard={field} fieldSetter={setField} />
          <MyCards
            fieldKey="myCards"
            fieldCard={field}
            fieldSetter={setField}
          />
        </div>
        <div className="black-boxes">
          <div className="box-row">
            {[0, 1, 2].map((index) => {
              return (
                <GameCard
                  index={index}
                  fieldKey="selected"
                  field={field}
                  fieldSetter={setField}
                />
              );
            })}
          </div>
          <div className="box-row">
            {[3, 4, 5].map((index) => {
              return (
                <GameCard
                  index={index}
                  fieldKey="selected"
                  field={field}
                  fieldSetter={setField}
                />
              );
            })}
          </div>
          <div className="box-row">
            {[6, 7, 8].map((index) => {
              return (
                <GameCard
                  index={index}
                  fieldKey="selected"
                  field={field}
                  fieldSetter={setField}
                />
              );
            })}
          </div>
          <div className="box-row">
            {[9, 10, 11].map((index) => {
              return (
                <GameCard
                  index={index}
                  fieldKey="selected"
                  field={field}
                  fieldSetter={setField}
                />
              );
            })}
          </div>
          <div className="box-row">
            {[12, 13, 14].map((index) => {
              return (
                <GameCard
                  index={index}
                  fieldKey="selected"
                  field={field}
                  fieldSetter={setField}
                />
              );
            })}
          </div>
        </div>
        <Button
          className="back-btn"
          variant="contained"
          color="secondary"
          onClick={() => {
            history.push("/");
            setDeck(createCard(existJoker));
          }}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
