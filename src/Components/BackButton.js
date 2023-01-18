import React from "react";

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
    return <button onClick={this.saveData}>{this.buttonName}</button>;
  }
}
export default BackButton;
