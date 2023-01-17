import React from "react";

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.circleElement = (
      <div
        className={`progressBar-circle${this.props.active ? " active" : ""}${
          this.props.complete ? " complete" : ""
        }`}
      >
        {this.props.number}
        <span>{this.props.name}</span>
      </div>
    );
  }

  render() {
    return this.circleElement;
  }
}

export default Circle;
