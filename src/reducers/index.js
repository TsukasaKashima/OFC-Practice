import { combineReducers } from "redux";
import members from "./member.js";
import jokers from "./joker.js";

export default combineReducers({
  members,
  jokers,
});
