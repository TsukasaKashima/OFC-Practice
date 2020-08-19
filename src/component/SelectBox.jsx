import React, { useState } from "react";
import "../App.css";
import SelectBoxCard from "./SelectBoxCard";
import { DropTarget } from "react-drag-drop-container";

export default function SelectBox(props) {
  const [box, setBox] = useState([]);
  function onClickDeleteButton(type, number, index) {
    const tmpCard = box.concat();
    const tmpField = Object.assign({}, props.field);
    tmpField[type][index] = { type: type, number: number };
    props.setField(tmpField);
    setBox(
      tmpCard.filter((card) => {
        return !(card.type === type && card.number === number);
      })
    );
  }
  return (
    <React.Fragment>
      <DropTarget
        dropData={{
          type: box.type,
          number: box.number,
        }}
        onHit={(e) => {
          if (box.length < 15) {
            const tmpField = Object.assign({}, props.field);
            const tmpBox = box.concat();
            tmpBox.push({
              number: e.dragData.number,
              type: e.dragData.type,
              index: e.dragData.index,
            });
            tmpField[e.dragData.key][e.dragData.index] = {
              type: undefined,
              number: undefined,
            };
            props.setField(tmpField);
            setBox(tmpBox);
          }
        }}
      >
        <div className="box-row">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
            if (box[index]) {
              return (
                <SelectBoxCard
                  type={box[index].type}
                  number={box[index].number}
                  index={box[index].index}
                  onClick={onClickDeleteButton}
                />
              );
            }
            return <SelectBoxCard />;
          })}
        </div>
        <div className="box-row">
          {[8, 9, 10, 11, 12, 13, 14].map((index) => {
            if (box[index]) {
              return (
                <SelectBoxCard
                  type={box[index].type}
                  number={box[index].number}
                  index={box[index].index}
                  onClick={onClickDeleteButton}
                />
              );
            }
            return <SelectBoxCard />;
          })}
        </div>
      </DropTarget>
    </React.Fragment>
  );
}
