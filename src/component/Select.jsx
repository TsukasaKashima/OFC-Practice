import React, { useState } from "react";
import "../App.css";
import SelectCardRow from "./SelectCardRow";
import SelectCardRowJoker from "./SelectCardRowJoker";
import {
  JOKER_1,
  JOKER_2,
  SPADE,
  CLOVER,
  HEART,
  DIAMOND
} from "../common/constant";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SelectBox from "./SelectBox";

export default function Select(props) {
  const history = useHistory();
  function createCard() {
    const resultArray = [];
    for (let i = 1; i <= 13; i++) {
      resultArray.push({ type: SPADE, number: i });
      resultArray.push({ type: CLOVER, number: i });
      resultArray.push({ type: HEART, number: i });
      resultArray.push({ type: DIAMOND, number: i });
    }
    if (props.existJoker) {
      resultArray.push({ type: JOKER_1 });
      resultArray.push({ type: JOKER_2 });
    }
    return resultArray;
  }
  const [deck, setDeck] = useState(createCard());
  const spadeFilter = deck.filter(deck => {
    return deck.type === SPADE;
  });
  const cloverFilter = deck.filter(deck => {
    return deck.type === CLOVER;
  });
  const heartFilter = deck.filter(deck => {
    return deck.type === HEART;
  });
  const diamondFilter = deck.filter(deck => {
    return deck.type === DIAMOND;
  });
  const joker1Filter = deck.filter(deck => {
    return deck.type === JOKER_1;
  });
  const joker2Filter = deck.filter(deck => {
    return deck.type === JOKER_2;
  });
  const [field, setField] = useState({
    [SPADE]: [...spadeFilter],
    [CLOVER]: [...cloverFilter],
    [HEART]: [...heartFilter],
    [DIAMOND]: [...diamondFilter],
    [JOKER_1]: [...joker1Filter],
    [JOKER_2]: [...joker2Filter]
  });

  return (
    <div className="select-cards">
      <div className="box-row">
        <SelectCardRow field={field} fieldKey={SPADE} fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRow field={field} fieldKey={CLOVER} fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRow field={field} fieldKey={HEART} fieldSetter={setField} />
      </div>
      <div className="box-row">
        <SelectCardRow
          field={field}
          fieldKey={DIAMOND}
          fieldSetter={setField}
        />
      </div>
      <div className="box-row select-card-joker">
        <SelectCardRowJoker
          field={field}
          fieldKey={JOKER_1}
          fieldSetter={setField}
        />
        <SelectCardRowJoker
          field={field}
          fieldKey={JOKER_2}
          fieldSetter={setField}
        />
      </div>
      <div className="select-boxes">
        <SelectBox field={field} setField={setField} />
        <Button
          className="select-btn"
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/game");
          }}
        >
          SET
        </Button>
      </div>
    </div>
  );
}
