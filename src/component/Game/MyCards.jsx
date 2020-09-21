import React from "react";
import "../../App.css";
import GameCard from "./GameCard";
export default function OppField(props) {
  return (
    <React.Fragment>
      <div className="box-row my-cards">
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
    </React.Fragment>
  );
}
