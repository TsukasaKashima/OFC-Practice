import { ONE_OPP, TWO_OPP } from "../action/index.js";
import OppField1 from "../container/OppField1.jsx";

const members = (state = Number, action) => {
  switch (action.type) {
    case ONE_OPP:
      state = 1;
      return (member) => {
        return member.count !== OppField1;
      };
    case TWO_OPP:
      state = 2;
      return [
        {
          Member: action.countMember,
        },
      ];
    default:
      return state;
  }
};

export default members;
