import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  function Add() {
    setResult(Number(a) + Number(b));
  }
  function Sub() {
    setResult(Number(a) - Number(b));
  }
  function Mult() {
    setResult(Number(a) * Number(b));
  }
  function Div() {
    if (Number(b) !== 0) {
      setResult(Number(a) / Number(b));
    } else {
      setResult("Undefined");
    }
  }

  return (
    <div className="calc-container">
      <h2>Mini Calculator</h2>

      <input
        type="number"
        placeholder="Enter value for A"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter value for B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <div className="btn-group">
        <button onClick={Add}>+</button>
        <button onClick={Sub}>−</button>
        <button onClick={Mult}>×</button>
        <button onClick={Div}>÷</button>
      </div>

      <p className="result">Result: {result}</p>
    </div>
  );
}

export default Calculator;
