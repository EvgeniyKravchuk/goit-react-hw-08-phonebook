import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = "";
  },
};
