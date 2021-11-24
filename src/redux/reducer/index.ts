import { combineReducers } from "redux";
import LayoutReducer from "./layout-reducer";

export default combineReducers({ layout: LayoutReducer });
