import React from "react";
import "../App.css";
import SelectCard from "./SelectCard";
export default function SelectCardRowJoker(props) {
  return (
    <React.Fragment>
      {[0].map((index) => {
        return (
          <SelectCard
            fieldKey={props.fieldKey}
            index={index}
            field={props.field}
            fieldSetter={props.fieldSetter}
          />
        );
      })}
    </React.Fragment>
  );
}
