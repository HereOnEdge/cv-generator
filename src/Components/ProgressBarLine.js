import React from "react";

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.lineElement = <div className="progressBar-line"></div>;
  }
  active() {
    this.lineElement = <div className="progressBar-line active"></div>;
    return this.lineElement;
  }
  render() {
    return this.props.active ? this.active() : this.lineElement;
  }
}

export default Line;
