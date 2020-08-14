import React from "react";
import "../App.css";
import SelectCard from "./SelectCard";
export default function JokerCard(props) {
  return (
    <React.Fragment>
      {[0, 1].map((index) => {
        return (
          <SelectCard
            index={index}
            field={props.fieldCard}
            fieldSetter={props.fieldSetter}
          />
        );
      })}
    </React.Fragment>
  );
}
