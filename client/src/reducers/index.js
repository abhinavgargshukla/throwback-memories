import { combineReducers } from "redux";
import posts from "./post.js";
import auth from "./auth.js";

export default combineReducers({
  posts, 
  auth,
});
