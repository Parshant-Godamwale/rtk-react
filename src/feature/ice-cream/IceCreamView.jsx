import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, reStocked } from "./iceCreamSlice";
export const IceCreamView = () => {
  const noOfIceCream = useSelector((state) => state.iceCream.noOfIceCream);
  const dispatch = useDispatch();
  const [num ,setNum]=useState(1)
  return (
    <div>
      <h2>no of ice-cream - {noOfIceCream}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        buy
      </button>
      <input type='text' value={num} onChange={(e)=>{setNum(parseInt(e.target.value))}}/>
      <button
        onClick={() => {
          dispatch(reStocked(num));
        }}
      >
        restocked
      </button>
    </div>
  );
};
