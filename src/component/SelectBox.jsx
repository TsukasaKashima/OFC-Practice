import React, { useState, useEffect } from "react";
import "../App.css";
import SelectBoxCard from "./SelectBoxCard";
import { JOKER, SPADE, CLOVER, HEART, DIAMOND } from "../common/constant";
import { DropTarget } from "react-drag-drop-container";

export default function SelectBox(props) {
  const [deck, setDeck] = useState(createCard());

  const [box, setBox] = useState([
    {
      type: deck.type,
      number: deck.number,
    },
  ]);

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

  useEffect(() => {
    const tmpArray = box.concat();
    tmpArray.push({
      type: box.type,
      number: box.number,
    });
    setBox(tmpArray);
  }, []);

  return (
    <React.Fragment>
      <DropTarget
        dropData={{
          type: box.type,
          number: box.number,
        }}
        onHit={(e) => {
          const tmpField = Object.assign({}, props.field);
          tmpField[e.dragData.key][e.dragData.index] = {
            type: undefined, //e.dragData.type,
            number: undefined, //e.dragData.number,
          };
          props.setField(tmpField);
          setDeck(tmpField);
        }}
      >
        <div className="box-row">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
            if (box[index]) {
              return <SelectBoxCard type={deck.type} number={deck.number} />; // 表示すべきカードの情報をpropsで渡す
            }
            return <SelectBoxCard type={deck.type} number={deck.number} />;
          })}
        </div>
        <div className="box-row">
          {[8, 9, 10, 11, 12, 13, 14].map((index) => {
            if (box[index]) {
              return <SelectBoxCard type={box.type} number={box.number} />; // 表示すべきカードの情報をpropsで渡す
            }
            return <SelectBoxCard type={box.type} number={box.number} />;
          })}
        </div>
      </DropTarget>
    </React.Fragment>
  );
}
