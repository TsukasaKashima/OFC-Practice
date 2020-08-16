import React from "react";
import "../App.css";
import GameCard from "./GameCard";
export default function SelfField(props) {
  return (
    <React.Fragment>
      <div className="box-row">
        {[0, 1, 2].map((index) => {
          return (
            <GameCard
              index={index}
              fieldKey={props.fieldKey}
              field={props.fieldCard}
              fieldSetter={props.fieldSetter}
            />
          );
        })}
      </div>
      <div className="box-row">
        {[3, 4, 5, 6, 7].map((index) => {
          return (
            <GameCard
              index={index}
              fieldKey={props.fieldKey}
              field={props.fieldCard}
              fieldSetter={props.fieldSetter}
            />
          );
        })}
      </div>
      <div className="box-row">
        {[8, 9, 10, 11, 12].map((index) => {
          return (
            <GameCard
              index={index}
              fieldKey={props.fieldKey}
              field={props.fieldCard}
              fieldSetter={props.fieldSetter}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
