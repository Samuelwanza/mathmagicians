import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, buttonClass }) => (
  <button type="button" className={buttonClass}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

export default Button;
