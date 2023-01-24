import React from "react";
import InputValidation from "./InputValidation";
import { checkValidation } from "../validation";
import RemoveInputField from "./RemoveInputField";
import "../styles/TextInput.css";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.label = this.props.label;
    this.field = this.props.field;
    this.placeHolder = this.props.placeHolder;
    this.topic = this.props.topic;
    this.state = {
      input: "",
      valid: "",
      active: false,
    };
    this.checkValidation = checkValidation.bind(this);
    this.validationType = this.props.validationType;
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  updateState() {
    if (this.props.data[this.topic] !== undefined) {
      this.setState({
        input: this.props.data[this.topic][this.field],
      });
      this.props.changeData(
        this.field,
        this.props.data[this.topic][this.field]
      );
      if (
        this.checkValidation(
          this.props.data[this.topic][this.field],
          this.validationType
        ) === "valid"
      ) {
        this.setState({
          valid: true,
        });
      } else if (
        this.checkValidation(
          this.props.data[this.topic][this.field],
          this.validationType
        ) === "not-valid"
      ) {
        this.setState({
          valid: false,
        });
      } else if (
        this.checkValidation(
          this.props.data[this.topic][this.field],
          this.validationType
        ) === ""
      ) {
        this.setState({
          valid: "",
        });
      }
    }
  }
  onFocus() {
    this.setState({
      active: true,
    });
  }
  onBlur() {
    this.setState({
      active: false,
    });
  }
  saveData(value) {
    console.log(value);
    this.setState({
      input: value,
    });
    if (this.checkValidation(value, this.validationType) === "valid") {
      this.setState({
        valid: true,
      });
      this.props.changeData(this.field, value);
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

  componentDidMount() {
    this.updateState();
  }

  render() {
    return this.props.visible === false ? null : (
      <div
        className={`whole-input-container ${
          this.props.className === "half" ? "half" : ""
        }`}
      >
        <label htmlFor={this.label}>{this.label}</label>
        <div className={`input-container ${this.state.active ? "active" : ""}`}>
          <input
            name={this.label}
            id={this.label}
            type="text"
            value={this.state.input}
            placeholder={this.placeHolder}
            onChange={(event) => {
              this.saveData(event.target.value);
            }}
            autoComplete="on"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          ></input>
          <RemoveInputField
            changeField={this.props.changeField}
            removable={this.props.removable}
            field={this.field}
            changeData={this.props.changeData}
          />
          <InputValidation valid={this.state.valid} />
        </div>
      </div>
    );
  }
}

export default TextInput;
