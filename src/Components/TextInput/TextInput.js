import React from "react";
import PropTypes from "prop-types";

const textInput = ({ type, value, name, placeholder, styles }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      styles={styles}
    />
  );
};

textInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  styles: PropTypes.object
};

export default textInput;
