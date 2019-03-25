import React from "react";
import PropTypes from "prop-types";

import Option from "../Option/Option";

const dropdown = ({ name, value, options, styles }) => {
  return (
    <select name={name} value={value} style={styles}>
      {options.map((option, index) => (
        <Option key={index} option={option} />
      ))}
    </select>
  );
};

dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  styles: PropTypes.object
};

export default dropdown;
