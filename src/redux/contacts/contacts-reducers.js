import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const itemsReducer = createReducer([], {});

const filterReducer = createReducer("", {});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
