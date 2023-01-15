import React from "react";
import InputValidation from "./InputValidation";
import { checkValidation } from "../validation";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.label = this.props.label;
    this.field = this.props.field;
    this.placeholder = this.props.placeholder;
    this.state = {
      input: "",
      valid: "",
    };
    this.checkValidation = checkValidation.bind(this);
  }

  saveData(event) {
    if (this.checkValidation(event) === "valid") {
      this.setState({
        input: event.target.value,
        valid: true,
      });
      this.props.changeData(this.field, this.state.input);
    }
  }

  render() {
    return (
      <div>
        <label htmlFor={this.label}>{this.label}</label>
        <div>
          <input
            name={this.label}
            id={this.label}
            type="text"
            value={this.state.input}
            placeholder={this.placeholder}
            onChange={(event) => {
              this.saveData(event);
            }}
            autoComplete="on"
          ></input>
          <InputValidation valid={this.state.valid} />
        </div>
      </div>
    );
  }
}

export default TextInput;
