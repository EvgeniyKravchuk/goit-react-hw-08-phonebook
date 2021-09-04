import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk("contacts/fetch", async () => {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {
    console.log("fetchContacts error:" + error.message);
  }
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData) => {
    try {
      const { data } = await axios.post("/contacts", contactData);
      return data;
    } catch (error) {
      console.log("addContact error:" + error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async ({ id, contacts }) => {
    try {
      await axios.delete(`/contacts/${id}`);

      return contacts;
    } catch (error) {
      console.log("deleteContact error:" + error.message);
    }
  }
);
