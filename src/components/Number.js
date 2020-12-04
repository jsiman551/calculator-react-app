import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Number = ({ onNumber }) => {
  const renderNumbers = (onNumber) => {
    const renderNumber = (Number) => (
      <Button key={Number} text={Number.toString()} clickHandler={onNumber} />
    );
    return Numbers.map(renderNumber);
  };
  return <div className="numbers">{renderNumbers(onNumber)}</div>;
};

Number.propTypes = {
  onNumber: PropTypes.func.isRequired
};

export default Number;
