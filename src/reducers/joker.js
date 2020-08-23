import { SELECT_JOKER, NON_JOKER } from "../action/index.js";

const jokers = (state = [], action) => {
  switch (action.type) {
    case SELECT_JOKER:
      return [
        ...state,
        {
          Joker: action.countJoker,
        },
      ];
    case NON_JOKER:
      return [
        ...state,
        {
          Joker: action.countJoker,
        },
      ];
    default:
      return state;
  }
};

export default jokers;
