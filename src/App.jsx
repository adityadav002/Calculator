/** @format */

import "./App.css";
import Display from "./components/Display";
import Logic from "./components/Logic";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const button = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "=",
    "/",
  ];
  const main = (btn) => {
    console.log(btn);
    if (btn === "C") {
      setInput("");
    } else if (btn === "=") {
      setInput(eval(input));
    } else {
      const newInput = input + btn;
      setInput(newInput);
    }
  };
  return (
    <>
      <h1 className="heading">CALCULATOR</h1>
      <div className="container">
        <Display value={input} />
        <Logic btn={button} main={main} />
      </div>
    </>
  );
}

export default App;
