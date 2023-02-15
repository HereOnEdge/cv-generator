import React from "react";
import Preview from "./Preview";
import "../../styles/Preview.css";

class PreviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightArea: "",
    };
  }
  findHighlightedArea() {
    this.setState((prevState) => {
      if (this.props.topic === "contact") {
        prevState.highlightArea = "contact";
        return {
          highlightArea: prevState.highlightArea,
        };
      } else if (this.props.page === "intro" || this.props.page === "summary") {
        prevState.highlightArea = this.props.topic;
        return {
          highlightArea: prevState.highlightArea,
        };
      }
    });
  }
  componentDidMount() {
    this.findHighlightedArea();
  }
  render() {
    return (
      <div
        className="preview-container"
        onClick={this.props.changePreviewState}
      >
        <Preview
          data={this.props.data}
          cvDesign={this.props.cvDesign}
          highlightArea={this.state.highlightArea}
        />
      </div>
    );
  }
}

export default PreviewContainer;
