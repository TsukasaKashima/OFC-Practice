import { SPADE, CLOVER, HEART, DIAMOND, JOKER_1, JOKER_2 } from "./constant.js";
import spade_1 from "../cards/spade_1.png";
import spade_2 from "../cards/spade_2.png";
import spade_3 from "../cards/spade_3.png";
import spade_4 from "../cards/spade_4.png";
import spade_5 from "../cards/spade_5.png";
import spade_6 from "../cards/spade_6.png";
import spade_7 from "../cards/spade_7.png";
import spade_8 from "../cards/spade_8.png";
import spade_9 from "../cards/spade_9.png";
import spade_10 from "../cards/spade_10.png";
import spade_11 from "../cards/spade_11.png";
import spade_12 from "../cards/spade_12.png";
import spade_13 from "../cards/spade_13.png";

import clover_1 from "../cards/clover_1.png";
import clover_2 from "../cards/clover_2.png";
import clover_3 from "../cards/clover_3.png";
import clover_4 from "../cards/clover_4.png";
import clover_5 from "../cards/clover_5.png";
import clover_6 from "../cards/clover_6.png";
import clover_7 from "../cards/clover_7.png";
import clover_8 from "../cards/clover_8.png";
import clover_9 from "../cards/clover_9.png";
import clover_10 from "../cards/clover_10.png";
import clover_11 from "../cards/clover_11.png";
import clover_12 from "../cards/clover_12.png";
import clover_13 from "../cards/clover_13.png";

import heart_1 from "../cards/heart_1.png";
import heart_2 from "../cards/heart_2.png";
import heart_3 from "../cards/heart_3.png";
import heart_4 from "../cards/heart_4.png";
import heart_5 from "../cards/heart_5.png";
import heart_6 from "../cards/heart_6.png";
import heart_7 from "../cards/heart_7.png";
import heart_8 from "../cards/heart_8.png";
import heart_9 from "../cards/heart_9.png";
import heart_10 from "../cards/heart_10.png";
import heart_11 from "../cards/heart_11.png";
import heart_12 from "../cards/heart_12.png";
import heart_13 from "../cards/heart_13.png";

import diamond_1 from "../cards/diamond_1.png";
import diamond_2 from "../cards/diamond_2.png";
import diamond_3 from "../cards/diamond_3.png";
import diamond_4 from "../cards/diamond_4.png";
import diamond_5 from "../cards/diamond_5.png";
import diamond_6 from "../cards/diamond_6.png";
import diamond_7 from "../cards/diamond_7.png";
import diamond_8 from "../cards/diamond_8.png";
import diamond_9 from "../cards/diamond_9.png";
import diamond_10 from "../cards/diamond_10.png";
import diamond_11 from "../cards/diamond_11.png";
import diamond_12 from "../cards/diamond_12.png";
import diamond_13 from "../cards/diamond_13.png";
import joker_1 from "../cards/joker_1.png";
import joker_2 from "../cards/joker_2.png";

const spadeCards = [
  spade_1,
  spade_2,
  spade_3,
  spade_4,
  spade_5,
  spade_6,
  spade_7,
  spade_8,
  spade_9,
  spade_10,
  spade_11,
  spade_12,
  spade_13,
];

const cloverCards = [
  clover_1,
  clover_2,
  clover_3,
  clover_4,
  clover_5,
  clover_6,
  clover_7,
  clover_8,
  clover_9,
  clover_10,
  clover_11,
  clover_12,
  clover_13,
];

const heartCards = [
  heart_1,
  heart_2,
  heart_3,
  heart_4,
  heart_5,
  heart_6,
  heart_7,
  heart_8,
  heart_9,
  heart_10,
  heart_11,
  heart_12,
  heart_13,
];

const diamondCards = [
  diamond_1,
  diamond_2,
  diamond_3,
  diamond_4,
  diamond_5,
  diamond_6,
  diamond_7,
  diamond_8,
  diamond_9,
  diamond_10,
  diamond_11,
  diamond_12,
  diamond_13,
];

const cardImage = {
  spadeCards,
  cloverCards,
  heartCards,
  diamondCards,
  joker_1,
  joker_2,
};
export default cardImage;
export const getImageFromTypeAndNumber = (type, number) => {
  if (type === JOKER_1) {
    return joker_1;
  } else if (type === JOKER_2) {
    return joker_2;
  } else if (type === SPADE) {
    return spadeCards[number - 1];
  } else if (type === CLOVER) {
    return cloverCards[number - 1];
  } else if (type === HEART) {
    return heartCards[number - 1];
  } else if (type === DIAMOND) {
    return diamondCards[number - 1];
  }
};
