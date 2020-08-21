export const ONE_OPP = "ONE_OPP";
export const TWO_OPP = "TWO_OPP";
export const SELECT_JOKER = "SELECT_JOKER";
export const NON_JOKER = "NON_JOKER";

export const oneOpp = (member) => {
  return {
    type: ONE_OPP,
    countMember: member,
  };
};

export const twoOpp = (member) => {
  return {
    type: TWO_OPP,
    countMember: member,
  };
};

export const selectJoker = (joker) => {
  return {
    type: SELECT_JOKER,
    countJoker: joker,
  };
};

export const nonJoker = (joker) => {
  return {
    type: NON_JOKER,
    countJoker: joker,
  };
};
