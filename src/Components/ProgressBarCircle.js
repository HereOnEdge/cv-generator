import React from "react";

class Circle extends React.Component {
  render() {
    const circleElement = (
      <div
        className={`progressBar-circle${
          this.props.topic === this.props.currentNode.value().topic
            ? " active"
            : ""
        }${
          this.props.completedTopics.includes(this.props.topic)
            ? " complete"
            : ""
        }`}
      >
        {this.props.number}
        <span>{this.props.name}</span>
      </div>
    );
    return circleElement;
  }
}

export default Circle;
