import React from "react";

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
