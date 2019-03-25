import React from "react";
import PropTypes from "prop-types";

import Dropdown from "../Dropdown/Dropdown";
import TextInput from "../TextInput/TextInput";

const card = ({ index, type, currentStatus, occupation, company, income }) => {
  const content =
    type === "unemployed" ? (
      <div>
        <p>What is your current status?</p>
        <Dropdown
          name={"currentStatus"}
          value={currentStatus}
          options={[
            { label: "Unemployed", value: "unemployed" },
            { label: "Retired", value: "retired" }
          ]}
        />
      </div>
    ) : (
      <div>
        <h4>Job {index + 1}</h4>
        <p>What is your occupation?</p>
        <Dropdown
          name={"occupation"}
          value={occupation}
          options={[
            { label: "Developer", value: "developer" },
            { label: "CEO", value: "ceo" },
            { label: "Marketing", value: "marketing" }
          ]}
        />
        <p>Company name</p>
        <TextInput
          type="text"
          value={company}
          name="company"
          placeholder="Company"
        />
        <p>Income</p>
        <TextInput
          type="text"
          value={income}
          name="income"
          placeholder="Income"
        />
      </div>
    );
  return <form>{content}</form>;
};

card.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  curentStatus: PropTypes.string,
  occupation: PropTypes.string,
  company: PropTypes.string,
  income: PropTypes.string
};

export default card;
