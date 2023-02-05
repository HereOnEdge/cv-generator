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
    if (
      this.props.filledVitalInputs === undefined ||
      this.props.filledVitalInputs
    ) {
      this.props.editData(
        this.props.data,
        this.nextPageTopic,
        this.nextPagePage,
        this.props.currentPageNode,
        [...this.props.completedTopics, completeTopic],
        this.props.currentPageNode.next
      );
    } else {
      if (this.props.toggleAlertBox !== undefined) {
        this.props.showVitalInputs();
        this.props.toggleAlertBox();
      } else {
        this.props.showVitalInputs();
      }
    }
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
