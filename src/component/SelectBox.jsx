import React, { useContext } from "react";
import "../App.css";
import SelectBoxCard from "./SelectBoxCard";
import { DropTarget } from "react-drag-drop-container";
import { AppContext } from "../context/AppContext";

export default function SelectBox(props) {
  const { selectedCards, setSelectedCards } = useContext(AppContext);
  function onClickDeleteButton(type, number, index) {
    const tmpCard = selectedCards.concat();
    const tmpField = Object.assign({}, props.field);
    tmpField[type][index] = { type: type, number: number };
    props.setField(tmpField);
    setSelectedCards(
      tmpCard.filter((card) => {
        return !(card.type === type && card.number === number);
      })
    );
  }
  return (
    <React.Fragment>
      <DropTarget
        dropData={{
          type: selectedCards.type,
          number: selectedCards.number,
        }}
        onHit={(e) => {
          if (selectedCards.length < 15) {
            const tmpField = Object.assign({}, props.field);
            const tmpBox = selectedCards.concat();
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
            setSelectedCards(tmpBox);
          }
        }}
      >
        <div className="box-row select-box-row">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
            if (selectedCards[index]) {
              return (
                <React.Fragment>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      onClickDeleteButton(
                        selectedCards[index].type,
                        selectedCards[index].number,
                        selectedCards[index].index
                      );
                    }}
                  >
                    <span>×</span>
                  </button>
                  <SelectBoxCard
                    type={selectedCards[index].type}
                    number={selectedCards[index].number}
                    index={selectedCards[index].index}
                  />
                </React.Fragment>
              );
            }
            return <SelectBoxCard />;
          })}
        </div>
        <div className="box-row">
          {[8, 9, 10, 11, 12, 13, 14].map((index) => {
            if (selectedCards[index]) {
              return (
                <React.Fragment>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      onClickDeleteButton(
                        selectedCards[index].type,
                        selectedCards[index].number,
                        selectedCards[index].index
                      );
                    }}
                  >
                    <span>×</span>
                  </button>
                  <SelectBoxCard
                    type={selectedCards[index].type}
                    number={selectedCards[index].number}
                    index={selectedCards[index].index}
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
