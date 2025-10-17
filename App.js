import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (newTodoText) => {
    if (newTodoText.trim() === "") return; 
    this.setState((prevState) => ({
      todos: [...prevState.todos, { text: newTodoText }],
    }));
  };

  handleRemove = (index) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>        
        <Form onAdd={this.handleAdd} />
        <List todos={this.state.todos} onRemove={this.handleRemove} />
      </div>
    );
  }
}
