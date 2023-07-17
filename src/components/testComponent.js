import React, { useEffect } from "react";
import { testAction } from "../state/actions/testActions";
import { useDispatch, useSelector } from "react-redux";

export default function TestComponent() {
  const dispatch = useDispatch();

  const handleTesting = () => {
    dispatch(testAction(1));
    // console.log("TESTING")
  };

  return (
    <div>
      <button onClick={handleTesting}>Click me</button>
    </div>
  );
}
