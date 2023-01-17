import React from "react";

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.lineElement = <div className="progressBar-line"></div>;
  }
  active() {
    this.lineElement.props.className = `${this.lineElement.props.className} active`;
    return this.lineElement;
  }
  render() {
    return this.props.active ? this.active() : this.lineElement;
  }
}

export default Line;
