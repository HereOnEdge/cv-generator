import React from "react";
import { node } from "@reza2022/linked-list";

class AddDesc extends React.Component {
  saveData = () => {
    const descPageNode =
      this.props.topic === "work"
        ? node(
            { topic: this.props.topic, page: "description", id: this.props.id },
            this.props.currentPageNode,
            this.props.currentPageNode
          )
        : node(
            { topic: this.props.topic, page: "main", id: this.props.id },
            this.props.currentPageNode,
            this.props.currentPageNode
          );
    this.props.changeState(
      this.props.data,
      this.props.topic,
      descPageNode.value().page,
      this.props.currentPageNode,
      this.props.completedTopics,
      descPageNode,
      this.props.topic === "educate" ? true : undefined
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
