import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, buttonClass, buttonFunctionality }) => (
  <button
    type="button"
    className={buttonClass}
    onClick={buttonFunctionality}
    value={text}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  buttonFunctionality: PropTypes.func.isRequired,
};

export default Button;
