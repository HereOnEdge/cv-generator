import React from "react";

class RemoveInputField extends React.Component {
  constructor(props) {
    super(props);
    this.removable = this.props.removable;
  }

  render() {
    return this.removable ? (
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
