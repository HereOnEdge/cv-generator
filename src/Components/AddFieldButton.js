import React from "react";

class AddFieldButton extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    this.changeField = this.props.changeField;
    this.addField = this.addField.bind(this);
    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
  }

  addField() {
    this.changeField(this.name, true);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return this.props.hidden ? (
      <div></div>
    ) : (
      <input
        className="moreInfo-button"
        name={`add ${this.name}`}
        type="button"
        value={this.capitalizeFirstLetter(this.name)}
        onClick={() => this.addField()}
      ></input>
    );
  }
}

export default AddFieldButton;
