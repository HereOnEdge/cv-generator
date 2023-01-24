import React from "react";

class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.props.findNextPage.call(this, "n");
    this.props.findNextPageName.call(this);
    this.saveData = this.saveData.bind(this);
  }
  saveData() {
    const completeTopic =
      this.props.currentPageNode.next.value().topic !== this.props.topic
        ? this.props.topic
        : null;
    this.props.editData(
      this.props.data,
      this.nextPageTopic,
      this.nextPagePage,
      this.props.currentPageNode.next,
      [...this.props.completedTopics, completeTopic]
    );
  }
  render() {
    return this.props.enable ? (
      <button className="next-button" onClick={this.saveData}>
        {`Next: ${this.buttonName}`}
      </button>
    ) : (
      <div></div>
    );
  }
}

export default NextButton;
