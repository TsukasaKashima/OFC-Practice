import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { getImageFromTypeAndNumber } from "../common/cardImage.js";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

export default function Card(props) {
  const callbackUpdatedField = useRef(null);
  const [cardInformation, setCardInformation] = useState({
    type: undefined,
    number: undefined,
  });

  // Note: ドロップされた側のCardで呼び出される関数。
  //       この時点でprops.fieldSetterを呼び出してフィールドを更新すると、
  //       カードが重複してしまう。
  //       (stateのsetter関数が非同期であるため、まだドラッグした側のcardで呼び出したonHit関数内で行ったsetFieldSetterの結果が反映されていない)
  //       そこで、callbackUpdatedFieldというrefに退避させ、
  //       useEffectでprops.fieldの内容を監視してcallbackUpdatedFieldを実行させるようにした。
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
    console.log("B");
    if (
      props.field &&
      props.field[props.fieldKey] &&
      props.field[props.fieldKey][props.index]
    ) {
      console.log("A");
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
            alt=""
          />
        </DragDropContainer>
      </div>
    </DropTarget>
  );
}
