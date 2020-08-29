import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = props => {
  const [selectedCards, setSelectedCards] = useState([]);
  return (
    <AppContext.Provider
      value={{
        selectedCards,
        setSelectedCards
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
