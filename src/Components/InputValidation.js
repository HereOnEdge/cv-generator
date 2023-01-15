import React from "react";

class InputValidation extends React.Component {
  render() {
    this.valid = this.props.valid;
    return (
      <div>
        {this.valid ? (
          <div className="valid-input"></div>
        ) : this.valid === false ? (
          <div className="inValid-input"></div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default InputValidation;
