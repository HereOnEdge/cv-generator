import React from "react";
import Circle from "./ProgressBarCircle";
import Line from "./ProgressBarLine";

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progressBar">
        <Circle
          number="1"
          name="CV heading"
          active={this.props.topic === "contact" ? true : false}
          complete={
            this.props.completedTopics.includes("contact") ? true : false
          }
        />
        <Line
          active={
            this.props.topic === "work" ||
            this.props.completedTopics.includes("work")
              ? true
              : false
          }
        />
        <Circle
          number="2"
          name="Work History"
          active={this.props.topic === "work" ? true : false}
          complete={this.props.completedTopics.includes("work") ? true : false}
        />
        <Line
          active={
            this.props.topic === "educate" ||
            this.props.completedTopics.includes("educate")
              ? true
              : false
          }
        />
        <Circle
          number="3"
          name="Education"
          active={this.props.topic === "educate" ? true : false}
          complete={
            this.props.completedTopics.includes("educate") ? true : false
          }
        />
        <Line
          active={
            this.props.topic === "skills" ||
            this.props.completedTopics.includes("skills")
              ? true
              : false
          }
        />
        <Circle
          number="4"
          name="Skills"
          active={this.props.topic === "skills" ? true : false}
          complete={
            this.props.completedTopics.includes("skills") ? true : false
          }
        />
        <Line
          active={
            this.props.topic === "summary" ||
            this.props.completedTopics.includes("summary")
              ? true
              : false
          }
        />
        <Circle
          number="5"
          name="Professional summary"
          active={this.props.topic === "summary" ? true : false}
          complete={
            this.props.completedTopics.includes("summary") ? true : false
          }
        />
        <Line
          active={
            this.props.topic === "final" ||
            this.props.completedTopics.includes("final")
              ? true
              : false
          }
        />
        <Circle
          number="6"
          name="Finalise"
          active={this.props.topic === "final" ? true : false}
          complete={this.props.completedTopics.includes("final") ? true : false}
        />
      </div>
    );
  }
}

export default ProgressBar;
