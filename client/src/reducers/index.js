import { combineReducers } from "redux";

import sessions from "./sessions";
import likes from "./likes";

export default combineReducers({
    sessions,
    likes
})