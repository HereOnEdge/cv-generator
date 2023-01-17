import React from "react";
import Preview from "./Preview";

class PreviewContainer extends React.Component {
  render() {
    return (
      <Preview
        data={this.props.data}
        highlightArea={this.props.highlightArea}
      />
    );
  }
}

export default PreviewContainer;
