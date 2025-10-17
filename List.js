import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const { todos, onRemove } = this.props;

    return (
      <div className="list">
        {todos.map((todo, index) => (
          <Todo 
            key={index} 
            todo={todo} 
            index={index} 
            onRemove={onRemove} 
          />
        ))}
      </div>
    );
  }
}
