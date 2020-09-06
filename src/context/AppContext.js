import React, { createContext, useState } from "react";
import {
  SPADE,
  CLOVER,
  DIAMOND,
  HEART,
  JOKER_1,
  JOKER_2,
} from "../common/constant";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [deck, setDeck] = useState(createCard());
  const [preDeck, setPreDeck] = useState(deck);
  const [existJoker, setExistJoker] = useState(true);

  function createCard(needPushJoker) {
    const resultArray = [];
    for (let i = 1; i <= 13; i++) {
      resultArray.push({ type: SPADE, number: i });
      resultArray.push({ type: CLOVER, number: i });
      resultArray.push({ type: HEART, number: i });
      resultArray.push({ type: DIAMOND, number: i });
    }
    if (needPushJoker) {
      resultArray.push({ type: JOKER_1 });
      resultArray.push({ type: JOKER_2 });
    }
    return resultArray;
  }
  return (
    <AppContext.Provider
      value={{
        selectedCards,
        setSelectedCards,
        deck,
        setDeck,
        preDeck,
        setPreDeck,
        createCard,
        existJoker,
        setExistJoker,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
