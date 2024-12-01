"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { increment } from "../lib/features/counter/counterSlice";

// type Props = {}

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center space-y-4 justify-center">
      <div className="text-2xl font-bold">Counter</div>
      <div>Count: {count}</div>
      <button
        className=" bg-sky-500 text-white px-4 py-2 rounded"
        type="button"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
    </div>
  );
}
