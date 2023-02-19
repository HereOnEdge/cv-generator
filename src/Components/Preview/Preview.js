import React from "react";
import "../../styles/Preview.css";
import DefaultTemplate from "./Templates/DefaultTemplate";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.hasCloseButton();
    this.findTemplate();
  }
  hasCloseButton = () => {
    this.closeButton =
      this.props.hasCloseButton === true ? (
        <div
          className="close-button"
          onClick={
            this.props.changePreviewState !== undefined
              ? this.props.changePreviewState
              : null
          }
          title="Close Preview"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      ) : null;
  };
  findTemplate = () => {
    this.template =
      this.props.cvDesign.activeTemplate === "default" ? (
        <DefaultTemplate
          data={this.props.data}
          cvDesign={this.props.cvDesign}
          highlightArea={this.props.highlightArea}
          closeButton={this.closeButton}
        />
      ) : null;
  };
  componentDidUpdate() {
    this.hasCloseButton();
    this.findTemplate();
  }
  // componentDidMount() {
  //   this.hasCloseButton();
  //   this.findTemplate();
  // }
  render() {
    return this.template;
  }
}

export default Preview;
