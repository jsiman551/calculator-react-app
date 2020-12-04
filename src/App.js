/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from "lodash.words";
import Result from "./components/Result";
import MatchOperation from "./components/MatchOperations";
import Functions from "./components/Functions";
import Number from "./components/Number";
import "./styles.css";

export default function App() {
  const [numberValue, setnumberValue] = useState("");
  const item = words(numberValue, /[^-^+^*^/]+/g);
  return (
    <main className="react-calculator">
      <Result value={item.length > 0 ? item[item.length - 1] : "0"} />
      <Number
        onNumber={(number) => {
          setnumberValue(`${numberValue}${number}`);
        }}
      />
      <Functions
        onClear={() => {
          setnumberValue("");
        }}
        onDelete={() => {
          if (setnumberValue.length > 0) {
            const newNumber = numberValue.substring(0, numberValue.length - 1);
            setnumberValue(newNumber);
          }
        }}
      />
      <MatchOperation
        operationsFunc={(operation) => {
          setnumberValue(`${numberValue}${operation}`);
        }}
        equalFunc={(value) => setnumberValue(eval(numberValue).toString())}
      />
    </main>
  );
}
