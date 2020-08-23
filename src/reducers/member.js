import { ONE_OPP } from "../action/index.js";

const members = (state = Number, action) => {
  switch (action.type) {
    case ONE_OPP:
      state = 1;
      /*return [
        {
          Member: action.countMember,
        },
      ];*/
      break;
    default:
      return state;
  }
};

export default members;
