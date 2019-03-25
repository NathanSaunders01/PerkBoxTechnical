import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import Card from "../Components/Card/Card";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobCount: 0,
      data: [],
      currentStatus: "",
      occupation: "",
      company: "",
      income: ""
    };
  }

  handleJobCount(jobCount) {
    this.setState({ jobCount });
  }

  render() {
    const { jobCount, currentStatus, occupation, company, income } = this.state;
    const cards =
      jobCount === 0 ? (
        <Card
          key={0}
          index={0}
          type="unemployed"
          currentStatus={currentStatus}
        />
      ) : (
        [...Array(jobCount)].map((_, index) => (
          <Card
            key={index}
            index={index}
            type="job"
            occupation={occupation}
            company={company}
            income={income}
          />
        ))
      );
    return (
      <div>
        <ButtonGroup>
          <Button
            onClick={this.handleJobCount.bind(this, 0)}
            className={jobCount === 0 ? "selected" : null}
          >
            0
          </Button>
          <Button
            onClick={this.handleJobCount.bind(this, 1)}
            className={jobCount === 1 ? "selected" : null}
          >
            1
          </Button>
          <Button
            onClick={this.handleJobCount.bind(this, 2)}
            className={jobCount === 2 ? "selected" : null}
          >
            2
          </Button>
          <Button
            onClick={this.handleJobCount.bind(this, 3)}
            className={jobCount === 3 ? "selected" : null}
          >
            3
          </Button>
        </ButtonGroup>
        <div>{cards}</div>
      </div>
    );
  }
}
