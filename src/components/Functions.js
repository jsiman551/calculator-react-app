import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Functions = ({ onClear, onDelete }) => {
  return (
    <div className="functions">
      <Button type="button-long-text" text="Clear" clickHandler={onClear} />
      <Button text="&larr;" clickHandler={onDelete} />
    </div>
  );
};

Functions.propTypes = {
  onClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Functions;
