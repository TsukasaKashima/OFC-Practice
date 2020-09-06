import React from "react";
import "../../App.css";
import GameCard from "./GameCard";
export default function GraveField(props) {
  return (
    <React.Fragment>
      {[0, 1, 2, 3].map((index) => {
        return (
          <GameCard
            index={index}
            fieldKey={props.fieldKey}
            field={props.fieldCard}
            fieldSetter={props.fieldSetter}
          />
        );
      })}
    </React.Fragment>
  );
}
