import React from "react";

class RemoveInputField extends React.Component {
  constructor(props) {
    super(props);
    this.removale = this.props.removale;
  }

  render() {
    return this.removale ? (
      <div className="remove-container">
        <button
          className="remove-btn"
          onClick={() => this.props.changeField(this.props.field, false)}
        ></button>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default RemoveInputField;
