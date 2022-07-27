import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfCake: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfCake--;
    },
    reStocked: (state, action) => {
      state.noOfCake += action.payload;
    },
  },
});
export default cakeSlice.reducer;
export const { ordered, reStocked } = cakeSlice.actions;
