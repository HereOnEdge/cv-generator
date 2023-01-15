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
              this.checkValidation(event);
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
