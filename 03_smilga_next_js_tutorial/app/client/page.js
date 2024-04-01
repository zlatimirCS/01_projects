"use client";
import { useState } from "react";

const ClientPage = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <p>{counter}</p>
      <button className="btn btn-neutral" onClick={handleIncrement}>
        click
      </button>
      <h1 className="text-7xl">ClientPage</h1>
    </div>
  );
};
export default ClientPage;
