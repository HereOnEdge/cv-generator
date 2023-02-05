import React from "react";

class AlertBox extends React.Component {
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
  render() {
    return (
      <div className="alert-box">
        <span className="close-alert"></span>
        <span className="alert-title">More information needed</span>
        <p className="alert-desc"></p>
        <div className="alert-buttons">
          <div className="alert-addButton" onClick={this.props.toggleAlertBox}>
            Add
          </div>
          <div className="alert-skipButtons" onClick={this.skip}>
            Skip
          </div>
        </div>
      </div>
    );
  }
}

export default AlertBox;
