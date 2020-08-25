import React from "react";
import "../App.css";
import SelectBoxCard from "./SelectBoxCard";
import { DropTarget } from "react-drag-drop-container";

export default function SelectBox(props) {
  function onClickDeleteButton(type, number, index) {
    const tmpCard = props.selectedCards.concat();
    const tmpField = Object.assign({}, props.field);
    tmpField[type][index] = { type: type, number: number };
    props.setField(tmpField);
    props.setSelectedCards(
      tmpCard.filter((card) => {
        return !(card.type === type && card.number === number);
      })
    );
  }
  console.log(props.selectedCards);
  return (
    <React.Fragment>
      <DropTarget
        dropData={{
          type: props.selectedCards.type,
          number: props.selectedCards.number,
        }}
        onHit={(e) => {
          if (props.selectedCards.length < 15) {
            const tmpField = Object.assign({}, props.field);
            const tmpBox = props.selectedCards.concat();
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
            props.setSelectedCards(tmpBox);
          }
        }}
      >
        <div className="box-row select-box-row">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
            if (props.selectedCards[index]) {
              return (
                <React.Fragment>
                  {(props.selectedCards[index].type,
                  props.selectedCards[index].number,
                  props.selectedCards[index].index) && (
                    <button
                      className="delete-btn"
                      onClick={() => {
                        onClickDeleteButton(
                          props.selectedCards[index].type,
                          props.selectedCards[index].number,
                          props.selectedCards[index].index
                        );
                      }}
                    >
                      <span>×</span>
                    </button>
                  )}
                  <SelectBoxCard
                    type={props.selectedCards[index].type}
                    number={props.selectedCards[index].number}
                    index={props.selectedCards[index].index}
                  />
                </React.Fragment>
              );
            }
            return <SelectBoxCard />;
          })}
        </div>
        <div className="box-row">
          {[8, 9, 10, 11, 12, 13, 14].map((index) => {
            if (props.selectedCards[index]) {
              return (
                <React.Fragment>
                  {(props.selectedCards[index].type,
                  props.selectedCards[index].number,
                  props.selectedCards[index].index) && (
                    <button
                      className="delete-btn"
                      onClick={() => {
                        onClickDeleteButton(
                          props.selectedCards[index].type,
                          props.selectedCards[index].number,
                          props.selectedCards[index].index
                        );
                      }}
                    >
                      <span>×</span>
                    </button>
                  )}
                  <SelectBoxCard
                    type={props.selectedCards[index].type}
                    number={props.selectedCards[index].number}
                    index={props.selectedCards[index].index}
                  />
                </React.Fragment>
              );
            }
            return <SelectBoxCard />;
          })}
        </div>
      </DropTarget>
    </React.Fragment>
  );
}
