import React from "react";
import "../App.css";
import Card from "./Card";
export default function GraveField(props) {
  return (
    <React.Fragment>
      {[0, 1, 2, 3].map((index) => {
        return (
          <Card
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
