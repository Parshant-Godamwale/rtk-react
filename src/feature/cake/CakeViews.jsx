import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, reStocked } from "./cakeSlice";
export const CakeViews = () => {
  const noOfCake = useSelector((state) => state.cake.noOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>no of Cake - {noOfCake}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        buy
      </button>
      <button
        onClick={() => {
          dispatch(reStocked(2));
        }}
      >
        restocked
      </button>
    </div>
  );
};
