import React from "react";
import "../../App.css";
import SelectCard from "./SelectCard";
export default function SelectCardRow(props) {
  return (
    <React.Fragment>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => {
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
