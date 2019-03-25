import React, { Component } from "react";
import { Button, ListGroupItem, ListGroup } from "react-bootstrap";

import TodoItem from "../Components/TodoItem/TodoItem";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      todo: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.todo.length === 0) return false;

    this.setState(prevState => {
      return {
        ...prevState,
        data: prevState.data.concat({
          id: Date.now(),
          title: prevState.todo
        })
      };
    });
  };

  handleTextChange = e => {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val
    });
  };

  render() {
    const list = this.state.data.map(({ title, id }) => (
      <TodoItem key={id} title={title} />
    ));

    if (list.length === 0) {
      list.push(<i>Nothing added</i>);
    }

    return (
      <div>
        <ListGroup>
          {list.map((item, i) => (
            <ListGroupItem key={i}>{item}</ListGroupItem>
          ))}
        </ListGroup>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="todo" onChange={this.handleTextChange} />

          <Button onClick={this.handleSubmit}>Add</Button>
        </form>
      </div>
    );
  }
}
