import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [selectedCards, setSelectedCards] = useState([]);
  //const [deck, setDeck] = useState([]);

  return (
    <AppContext.Provider
      value={{
        selectedCards,
        setSelectedCards,
      }}
      /*deck={{
        deck,
        setDeck,
      }}*/
    >
      {props.children}
    </AppContext.Provider>
  );
};
