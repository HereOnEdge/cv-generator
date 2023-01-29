import React from "react";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.highlightArea = this.props.highlightArea;
    this.data = this.props.data;
    this.hasHighlight = this.hasHighlight.bind(this);
  }

  hasHighlight() {}

  render() {
    return <div className="preview"></div>;
  }
}

export default Preview;
