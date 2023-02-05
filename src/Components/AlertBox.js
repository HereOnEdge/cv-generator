import React from "react";
import "../styles/alert-box.css";

class AlertBox extends React.Component {
  constructor(props) {
    super(props);
    this.findAlertBoxTexts();
  }
  findNextPage = () => {
    this.summaryPage = this.props.navLink.find({
      topic: this.props.topic,
      page: "summary",
    });
    this.nextPageNode =
      this.props.originalData[this.props.topic] === undefined
        ? this.summaryPage.next
        : this.summaryPage;
  };
  skip = () => {
    this.findNextPage();
    this.completedTopics =
      this.nextPageNode === this.summaryPage
        ? this.props.completedTopics
        : [...this.props.completedTopics, this.props.topic];
    this.props.changeState(
      this.props.originalData,
      this.nextPageNode.value().topic,
      this.nextPageNode.value().page,
      this.props.currentPageNode,
      this.completedTopics,
      this.nextPageNode
    );
  };
  findAlertBoxTexts = () => {
    this.paragraph =
      this.props.topic === "work"
        ? "It looks like you haven't entered any work history details. We recommend you add at least one position if possible."
        : "It looks like you haven't entered any education details.";
    this.skipButtonTitle =
      this.props.topic === "work"
        ? "I don't have any work experience"
        : "Yes, Skip anyway";
  };
  render() {
    return (
      <div className="alert-box-background">
        <div className="alert-box">
          <span className="close-alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={this.props.toggleAlertBox}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
          <span className="alert-title">More information needed</span>
          <p className="alert-desc">{this.paragraph}</p>
          <div className="alert-buttons">
            <div
              className="alert-addButton"
              onClick={this.props.toggleAlertBox}
            >
              Add
            </div>
            <div className="alert-skipButton" onClick={this.skip}>
              {this.skipButtonTitle}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertBox;
