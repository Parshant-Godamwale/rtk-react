import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  loading: false,
  users: [],
  error: "",
};
export const feachUser = createAsyncThunk("user/feachUser", () => {
  return axios.get("https://jsonplaceholders.typicode.com/users").then((res) => res.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  
  extraReducers: (builder) => {
    builder.addCase(feachUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(feachUser.fulfilled, (state, action) => {
      (state.loading = false), (state.users = action.payload), (state.error = "");
    });
    builder.addCase(feachUser.rejected, (state, action) => {
      (state.loading = false), (state.users = []), (state.error = action.error.message);
    });
  },
});

export default userSlice.reducer;
