import React from "react";
import { useSelector } from "react-redux";

export default function AnotherTest() {
  const test = useSelector((state) => state.test);
  const { loading, data, error } = test;

  return (
    <div>
      {loading ? (
        <p>Fetching data....</p>
      ) : data ? (
        <h1>Title : {data?.title}</h1>
      ) : (
        error && <p>Error hai</p>
      )}
    </div>
  );
}
