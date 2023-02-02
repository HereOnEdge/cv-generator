import React from "react";
import { node } from "@reza2022/linked-list";

class AddDesc extends React.Component {
  saveData = () => {
    const descPageNode = node(
      { topic: this.props.topic, page: "description", id: this.props.id },
      this.props.currentPageNode,
      this.props.currentPageNode
    );
    this.props.changeState(
      this.props.data,
      this.props.topic,
      "description",
      this.props.currentPageNode,
      this.props.completedTopics,
      descPageNode
    );
  };

  render() {
    return (
      <div className="add-description" onClick={this.saveData}>
        <span className="plus">+</span> <span>Add a description</span>
      </div>
    );
  }
}
export default AddDesc;
