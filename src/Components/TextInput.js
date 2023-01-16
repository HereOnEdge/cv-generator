import React from "react";
import InputValidation from "./InputValidation";
import { checkValidation } from "../validation";
import RemoveInputField from "./RemoveInputField";

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
    this.validationType = this.props.validationType;
  }

  saveData(event) {
    let value = event.target.value;
    if (this.checkValidation(value, this.validationType) === "valid") {
      console.log("valid");
      this.setState({
        input: value,
        valid: true,
      });
      this.props.changeData(this.field, this.state.input);
    } else if (
      this.checkValidation(value, this.validationType) === "not-valid"
    ) {
      this.setState({
        valid: false,
      });
    } else if (this.checkValidation(value, this.validationType) === "") {
      this.setState({
        valid: "",
      });
    }
  }

  render() {
    return this.props.visible === false ? (
      <div></div>
    ) : (
      <div>
        <label htmlFor={this.label}>{this.label}</label>
        <div>
          <input
            name={this.label}
            id={this.label}
            type="text"
            // value={this.state.input}
            placeholder={this.placeholder}
            onChange={(event) => {
              this.saveData(event);
            }}
            autoComplete="on"
          ></input>
          <InputValidation valid={this.state.valid} />
          <RemoveInputField
            changeField={this.props.changeField}
            removable={this.props.removable}
            field={this.field}
          />
        </div>
      </div>
    );
  }
}

export default TextInput;
