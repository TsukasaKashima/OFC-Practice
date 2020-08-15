import React, { useState } from "react";
import "../App.css";
import SelectCard from "./SelectCard";
import SelectCardRow from "./SelectCardRow";
import SelectCardRowJoker from "./SelectCardRowJoker";
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
  const [box, setBox] = useState([]);
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
    SPADE: [...spadeFilter],
    CLOVER: [...cloverFilter],
    HEART: [...heartFilter],
    DIAMOND: [...diamondFilter],
    JOKER: [...jokerFilter],
  });

  /*[NOTE:要件Dで使うかも]function onDrop(type, number) {
    callbackUpdatedField.current = (field) => {
      const tmpField = Object.assign({}, field);
      tmpField[props.fieldKey][props.index] = {
        type,
        number,
      };
      props.fieldSetter(tmpField);
    };
  }*/
  return (
    <div className="select-cards">
      <div className="box-row">
        <SelectCardRow field={field} fieldKey="SPADE" fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRow field={field} fieldKey="CLOVER" fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRow field={field} fieldKey="HEART" fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRow
          field={field}
          fieldKey="DIAMOND"
          fieldSetter={setField}
        />
      </div>
      <div className="box-row select-card-joker">
        <SelectCardRowJoker
          field={field}
          fieldKey="JOKER"
          fieldSetter={setField}
        />
      </div>
      <div className="select-boxes">
        <DropTarget
          dropData={{
            type: deck.type,
            number: deck.number,
          }}
          onHit={(e) => {
            const tmpField = Object.assign({}, field);
            tmpField[e.dragData.key][e.dragData.index] = {
              type: undefined, //e.dragData.type,
              number: undefined, //e.dragData.number,
            };
            setField(tmpField);
          }}
        >
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
