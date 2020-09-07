import React, { useState, useEffect } from "react";
import "../../App.css";
import { getImageFromTypeAndNumber } from "../../common/cardImage.js";
import { DragDropContainer } from "react-drag-drop-container";

export default function SelectCard(props) {
  const [cardInformation, setCardInformation] = useState({
    type: undefined,
    number: undefined,
  });
  useEffect(() => {
    if (
      props.field &&
      props.field[props.fieldKey] &&
      props.field[props.fieldKey][props.index]
    ) {
      setCardInformation(props.field[props.fieldKey][props.index]);
    }
  }, [props.field, props.key, props.index]);
  return (
    <div className="box">
      <DragDropContainer
        dragData={{
          key: props.fieldKey,
          index: props.index,
          type: cardInformation.type,
          number: cardInformation.number,
        }}
      >
        <img
          src={getImageFromTypeAndNumber(
            cardInformation.type,
            cardInformation.number
          )}
          alt=""
        />
      </DragDropContainer>
    </div>
  );
}
