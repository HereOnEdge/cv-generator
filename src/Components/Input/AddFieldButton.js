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
    return this.props.hidden ? null : (
      <div
        className="moreInfo-button"
        name={`add ${this.name}`}
        type="button"
        onClick={() => this.addField()}
        title={`Add ${this.name}'s input field`}
      >
        <div className="plus-sign">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            id="IconChangeColor"
          >
            {" "}
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              id="mainIconPathAttribute"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="currentColor"
            ></path>{" "}
          </svg>
        </div>
        {this.capitalizeFirstLetter(this.name)}
      </div>
    );
  }
}

export default AddFieldButton;
