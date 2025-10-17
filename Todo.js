import { Component } from "react";

export class Todo extends Component {
  render() {
    const { todo, onRemove, index } = this.props;

    return (
      <div className="todo">
        <p>{todo.text}</p>
        <button onClick={() => onRemove(index)}>x</button>
      </div>
    );
  }
}
