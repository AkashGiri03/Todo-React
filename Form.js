import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload
  this.props.onAdd(this.state.text); // Call parent's add handler with input from this component's state
  this.setState({ text: '' }); // Clear input after adding
};


 
  render() {
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        {/* Add onclick event on the button to add the todos */}
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}
