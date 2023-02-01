import React from "react";
import { node } from "@reza2022/linked-list";

class AddNewData extends React.Component {
  addData = () => {
    const mainPageNode = node(
      { topic: this.props.topic, page: "main", id: this.props.id },
      this.props.currentPageNode,
      this.props.currentPageNode
    );
    const descPageNode =
      this.props.topic === "work"
        ? node(
            { topic: this.props.topic, page: "description", id: this.props.id },
            this.props.currentPageNode,
            mainPageNode
          )
        : undefined;
    if (descPageNode !== undefined) {
      mainPageNode.next = descPageNode;
    }
    this.props.changeState(
      this.props.data,
      this.props.topic,
      "main",
      this.props.currentPageNode,
      this.props.completedTopics,
      mainPageNode
    );
  };
  render() {
    return (
      <div className="add-data-container">
        <span className="add-data-button" onClick={this.addData}>
          <span className="plus">+</span> Add another position
        </span>
      </div>
    );
  }
}
export default AddNewData;
