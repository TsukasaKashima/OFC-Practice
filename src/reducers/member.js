import { SELECT_MEMBER } from "../actions";

const members = (state = [], action) => {
  switch (action.type) {
    case SELECT_MEMBER:
      return [
        ...state,
        {
          Member: action.countMember,
        },
      ];
    default:
      return state;
  }
};

export default members;
