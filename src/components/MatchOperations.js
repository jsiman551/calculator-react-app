import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const MatchOperations = ({ operationsFunc, equalFunc }) => {
  return (
    <div className="math-operations">
      <Button clickHandler={operationsFunc} text="+" />
      <Button clickHandler={operationsFunc} text="-" />
      <Button clickHandler={operationsFunc} text="*" />
      <Button clickHandler={operationsFunc} text="/" />
      <Button clickHandler={equalFunc} text="=" />
    </div>
  );
};

MatchOperations.propTypes = {
  operationsFunc: PropTypes.func.isRequired,
  equalFunc: PropTypes.func.isRequired
};

export default MatchOperations;
