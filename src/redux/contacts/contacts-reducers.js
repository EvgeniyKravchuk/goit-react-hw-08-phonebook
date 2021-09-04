import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./contacts-operations";
import { changeFilter } from "./contacts-actions";

const itemsReducer = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [fetchContacts.fulfilled]: (_, { payload }) => [...payload],

  [deleteContact.fulfilled]: (_, { payload }) => [...payload],
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
