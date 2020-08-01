import React, { useState } from "react";
import "../App.css";
import { getImageFromTypeAndNumber } from "../common/cardImage.js";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

export default function Card(props) {
  const [type, setType] = useState(props.type);
  const [number, setNumber] = useState(props.number);
  function onDrop(type, number) {
    setType(type);
    setNumber(number);
  }
  return (
    <DropTarget
      dropData={{ type, number }}
      onHit={(e) => {
        setType(e.dragData.type);
        setNumber(e.dragData.number);
        e.dragData.onDrop(type, number);
      }}
    >
      <div className="box">
        <DragDropContainer dragData={{ type, number, onDrop }}>
          <img
            src={getImageFromTypeAndNumber(props.type, props.number)}
            alt=""
          />
        </DragDropContainer>
      </div>
    </DropTarget>
  );
}
