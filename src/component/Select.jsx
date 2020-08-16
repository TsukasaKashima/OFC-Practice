import React, { useState } from "react";
import "../App.css";
import SelectCardRow from "./SelectCardRow";
import SelectCardRowJoker from "./SelectCardRowJoker";
import { JOKER, SPADE, CLOVER, HEART, DIAMOND } from "../common/constant";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SelectBox from "./SelectBox";

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
  const cloverFilter = deck.filter((deck) => {
    return deck.type === CLOVER;
  });
  const heartFilter = deck.filter((deck) => {
    return deck.type === HEART;
  });
  const diamondFilter = deck.filter((deck) => {
    return deck.type === DIAMOND;
  });
  const jokerFilter = deck.filter((deck) => {
    return deck.type === JOKER;
  });
  const [field, setField] = useState({
    spade: [...spadeFilter],
    clover: [...cloverFilter],
    heart: [...heartFilter],
    diamond: [...diamondFilter],
    joker: [...jokerFilter],
  });
  return (
    <div className="select-cards">
      <div className="box-row">
        <SelectCardRow field={field} fieldKey="spade" fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRow field={field} fieldKey="clover" fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRow field={field} fieldKey="heart" fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRow
          field={field}
          fieldKey="diamond"
          fieldSetter={setField}
        />
      </div>
      <div className="box-row select-card-joker">
        <SelectCardRowJoker
          field={field}
          fieldKey="joker"
          fieldSetter={setField}
        />
      </div>
      <div className="select-boxes">
        <SelectBox field={field} setField={setField} />
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
