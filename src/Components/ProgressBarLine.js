import React from "react";

class Line extends React.Component {
  active() {
    this.lineElement = <div className="progressBar-line active"></div>;
    return this.lineElement;
  }
  render() {
    this.lineElement = <div className="progressBar-line"></div>;
    return this.props.topic === this.props.currentNode.value().topic ||
      this.props.completedTopics.includes(this.props.topic)
      ? this.active()
      : this.lineElement;
  }
}

export default Line;
