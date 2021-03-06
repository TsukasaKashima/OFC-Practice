import React, { useState, useEffect, useRef } from "react";
import "../../App.css";
import { getImageFromTypeAndNumber } from "../../common/cardImage.js";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

export default function Card(props) {
  const callbackUpdatedField = useRef(null);
  const [cardInformation, setCardInformation] = useState({
    type: undefined,
    number: undefined,
  });

  function onDrop(type, number) {
    callbackUpdatedField.current = (field) => {
      const tmpField = Object.assign({}, field);
      tmpField[props.fieldKey][props.index] = {
        type,
        number,
      };
      props.fieldSetter(tmpField);
    };
  }
  useEffect(() => {
    if (
      props.field &&
      props.field[props.fieldKey] &&
      props.field[props.fieldKey][props.index]
    ) {
      setCardInformation(props.field[props.fieldKey][props.index]);
    }
    if (callbackUpdatedField.current !== null) {
      callbackUpdatedField.current(props.field);
      callbackUpdatedField.current = null;
    }
  }, [props.field, props.fieldKey, props.index]);

  return (
    <DropTarget
      dropData={{
        type: cardInformation.type,
        number: cardInformation.number,
      }}
      onHit={(e) => {
        e.dragData.onDrop(cardInformation.type, cardInformation.number);
        const tmpField = Object.assign({}, props.field);
        tmpField[props.fieldKey][props.index] = {
          type: e.dragData.type,
          number: e.dragData.number,
        };
        props.fieldSetter(tmpField);
      }}
    >
      <div className="box">
        <DragDropContainer
          dragData={{
            type: cardInformation.type,
            number: cardInformation.number,
            onDrop,
          }}
        >
          <img
            src={getImageFromTypeAndNumber(
              cardInformation.type,
              cardInformation.number
            )}
            cardInformation={cardInformation}
            alt=""
          />
        </DragDropContainer>
      </div>
    </DropTarget>
  );
}
