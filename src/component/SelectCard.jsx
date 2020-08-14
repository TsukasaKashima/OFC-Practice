import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { getImageFromTypeAndNumber } from "../common/cardImage.js";
import { DragDropContainer } from "react-drag-drop-container";

export default function SelectCard(props) {
  const callbackUpdatedField = useRef(null);
  const [cardInformation, setCardInformation] = useState({
    type: undefined,
    number: undefined,
    //[NOTE:DragDropContainerのonHitされたときにsetCardInformationを更新する予定]
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
    if (props.field && props.field[props.index]) {
      setCardInformation(props.field[props.index]);
    }
  }, [props.field, props.index]);
  return (
    <DragDropContainer
      dropData={{
        type: cardInformation.type,
        number: cardInformation.number,
        onDrop,
      }}
      onHit={(e) => {
        e.dragData.onDrop(cardInformation.type, cardInformation.number);
        const tmpField = Object.assign({}, props.field);
        tmpField[props.field][props.index] = {
          type: e.dragData.type,
          number: e.dragData.number,
        };
        setCardInformation(tmpField);
      }}
    >
      <div className="box">
        <img
          src={getImageFromTypeAndNumber(
            cardInformation.type,
            cardInformation.number
          )}
          alt=""
        />
      </div>
    </DragDropContainer>
  );
}
