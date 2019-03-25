import React from "react";
import PropTypes from "prop-types";

const option = ({ option, styles }) => {
  const { label, value } = option;
  return (
    <option value={value} style={styles}>
      {label}
    </option>
  );
};

option.propTypes = {
  option: PropTypes.object.isRequired,
  styles: PropTypes.object
};

export default option;
