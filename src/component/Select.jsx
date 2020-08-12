import React, { useState } from "react";
import "../App.css";
import SelectCard from "./SelectCard";
import SelectCardRaw from "./SelectCardRow";
import { JOKER, SPADE, CLOVER, HEART, DIAMOND } from "../common/constant";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { DropTarget } from "react-drag-drop-container";

export default function Select() {
  const history = useHistory();
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
  const [deck, setDeck] = useState(createCard());
  const spadeFilter = deck.filter((deck) => {
    return deck.type === SPADE;
  });

  const [field, setField] = useState({
    SPADE: [...spadeFilter],
    CLOVER: [],
    HEART: [],
    DIAMOND: [],
    JOKER: [],
  });

  console.log(field.SPADE);
  return (
    <div className="select-cards">
      <div className="box-row">
        <SelectCardRaw fieldCard={field.SPADE} fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRaw fieldCard={field.CLOVER} fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRaw fieldCard={field.HEART} fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRaw fieldCard={field.DIAMOND} fieldSetter={setField} />
      </div>
      <div className="box-row select-card-joker">
        <SelectCard type={JOKER} />
        <SelectCard type={JOKER} />
      </div>
      <div className="select-boxes">
        <DropTarget>
          <div className="box-row">
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
          </div>
          <div className="box-row">
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
          </div>
        </DropTarget>
        <Button
          className="select-btn"
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/game");
          }}
        >
          SET
        </Button>
      </div>
    </div>
  );
}
