import React, { useState } from "react";
import "../App.css";
import { getImageFromTypeAndNumber } from "../common/cardImage.js";
import { DragDropContainer } from "react-drag-drop-container";

export default function SelectCard() {
  const [cardInformation, setCardInformation] = useState({
    type: undefined,
    number: undefined,
    //[NOTE:DragDropContainerのonHitされたときにsetCardInformationを更新する予定]
  });

  return (
    <DragDropContainer>
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
