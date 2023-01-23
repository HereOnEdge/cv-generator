import React from "react";
import "../styles/NavigationButtons.css";

class BackButton extends React.Component {
  constructor(props) {
    super(props);
    this.props.findNextPage.call(this, "b");
    this.props.findNextPageName.call(this);
    this.saveData = this.saveData.bind(this);
  }
  saveData() {
    let completedTopics = this.props.completedTopics;
    completedTopics.pop();
    this.props.editData(
      this.props.data,
      this.nextPageTopic,
      this.nextPagePage,
      this.props.currentPageNode.back,
      completedTopics
    );
  }
  render() {
    return (
      <button className="back-button" onClick={this.saveData}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
        </svg>
        {this.buttonName}
      </button>
    );
  }
}
export default BackButton;
