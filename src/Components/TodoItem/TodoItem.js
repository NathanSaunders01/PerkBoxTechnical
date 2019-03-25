import React from "react";
import PropTypes from "prop-types";

/**
 * @title is the name of the todo item
 * @return todo item component
 */

const todoItem = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

todoItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default todoItem;
