import React from "react";

class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.props.findNextPage.call(this, "n");
    this.props.findNextPageName.call(this);
    this.saveData = this.saveData.bind(this);
  }
  saveData() {
    this.props.editData(
      this.props.data,
      this.nextPageTopic,
      this.nextPagePage,
      this.props.currentPageNode.next,
      [...this.props.completedTopics, this.props.topic]
    );
  }
  render() {
    return <button onClick={this.saveData}>{this.buttonName}</button>;
  }
}

export default NextButton;
