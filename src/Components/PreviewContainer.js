import React from "react";
import Preview from "./Preview";

class PreviewContainer extends React.Component {
  render() {
    return (
      <div className="preview-container">
        <Preview
          data={this.props.data}
          highlightArea={this.props.highlightArea}
        />
      </div>
    );
  }
}

export default PreviewContainer;
