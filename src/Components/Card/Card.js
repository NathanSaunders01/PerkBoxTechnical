import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * @type decides whether to show job or jobless form
 * @return card component
 */

const card = ({ type, index, onChange, onSubmit }) => {
  const content =
    type === "unemployed" ? (
      <form onSubmit={onSubmit}>
        <p>What is your current status?</p>
        <select onChange={onChange} name="currentStatus">
          <option value="unemployed">Unemployed</option>
          <option value="retired">Retired</option>
        </select>
        <Button onClick={onSubmit}>Add</Button>
      </form>
    ) : (
      <form onSubmit={onSubmit}>
        <h4>Job {index + 1}</h4>
        <p>What is your occupation?</p>
        <select onChange={onChange} name="occupation">
          <option value="developer">Developer</option>
          <option value="ceo">CEO</option>
          <option value="marketing">Marketing</option>
        </select>
        <p>Company name</p>
        <input type="text" name="company" onChange={onChange} />
        <p>Income</p>
        <input type="text" name="income" onChange={onChange} />
        <Button onClick={onSubmit}>Add</Button>
      </form>
    );
  return <div>{content}</div>;
};

card.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default card;
