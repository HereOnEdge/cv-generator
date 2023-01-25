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
    this.saveData = this.saveData.bind(this);
    this.inputType =
      this.validationType === "phone" || this.validationType === "email"
        ? "text"
        : this.validationType;
  }
  updateState() {
    if (this.props.data[this.topic] !== undefined) {
      const data =
        this.props.id == undefined
          ? this.props.data[this.topic][this.field]
          : this.props.data[this.topic][this.props.id][this.field];
      console.log(this.props.data);
      this.setState({
        input: data,
      });
      this.props.id !== undefined
        ? this.props.changeData(this.field, data, this.props.id)
        : this.props.changeData(this.field, data);

      if (this.checkValidation(data, this.validationType) === "valid") {
        this.setState({
          valid: true,
        });
      } else if (
        this.checkValidation(data, this.validationType) === "not-valid"
      ) {
        this.setState({
          valid: false,
        });
      } else if (this.checkValidation(data, this.validationType) === "") {
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
    this.setState({
      input: value,
    });
    if (this.checkValidation(value, this.validationType) === "valid") {
      this.setState({
        valid: true,
      });
      this.props.id !== undefined
        ? this.props.changeData(this.field, value, this.props.id)
        : this.props.changeData(this.field, value);
    } else if (
      this.checkValidation(value, this.validationType) === "not-valid"
    ) {
      this.setState({
        valid: false,
      });
      this.props.id !== undefined
        ? this.props.changeData(this.field, "", this.props.id)
        : this.props.changeData(this.field, "");
    } else if (this.checkValidation(value, this.validationType) === "") {
      this.setState({
        valid: "",
      });
      this.props.id !== undefined
        ? this.props.changeData(this.field, value, this.props.id)
        : this.props.changeData(this.field, value);
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
            type={this.inputType}
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
            saveData={this.saveData}
          />
          <InputValidation valid={this.state.valid} />
        </div>
      </div>
    );
  }
}

export default TextInput;
