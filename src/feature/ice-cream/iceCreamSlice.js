import { ordered as cakeOrdered } from "../cake/cakeSlice";

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfIceCream: 20,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfIceCream--;
    },
    reStocked: (state, action) => {
      state.noOfIceCream += action.payload;
    },
  },
  //   extraReducers: {
  //     ['cake/ordered']: (state) => {
  //       state.noOfIceCream--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.noOfIceCream--;
    });
  },
});

export default iceCreamSlice.reducer;

export const { ordered,reStocked }= iceCreamSlice.actions