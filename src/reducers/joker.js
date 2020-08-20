import { SELECT_JOKER } from "../actions";
import { NON_JOKER } from "../actions";

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
