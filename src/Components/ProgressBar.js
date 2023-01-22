import React from "react";
import Circle from "./ProgressBarCircle";
import Line from "./ProgressBarLine";
import "../ProgressBar.css";

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progressBar">
        <Circle
          number="1"
          name="CV heading"
          topic="contact"
          completedTopics={this.props.completedTopics}
          currentNode={this.props.currentPageNode}
        />
        <Line
          currentNode={this.props.currentPageNode}
          topic="work"
          completedTopics={this.props.completedTopics}
        />
        <Circle
          number="2"
          name="Work History"
          topic="work"
          completedTopics={this.props.completedTopics}
          currentNode={this.props.currentPageNode}
        />
        <Line
          currentNode={this.props.currentPageNode}
          topic="educate"
          completedTopics={this.props.completedTopics}
        />
        <Circle
          number="3"
          name="Education"
          topic="educate"
          completedTopics={this.props.completedTopics}
          currentNode={this.props.currentPageNode}
        />
        <Line
          currentNode={this.props.currentPageNode}
          topic="skills"
          completedTopics={this.props.completedTopics}
        />
        <Circle
          number="4"
          name="Skills"
          topic="skills"
          completedTopics={this.props.completedTopics}
          currentNode={this.props.currentPageNode}
        />
        <Line
          currentNode={this.props.currentPageNode}
          topic="summary"
          completedTopics={this.props.completedTopics}
        />
        <Circle
          number="5"
          name="Professional summary"
          topic="summary"
          completedTopics={this.props.completedTopics}
          currentNode={this.props.currentPageNode}
        />
        <Line
          currentNode={this.props.currentPageNode}
          topic="final"
          completedTopics={this.props.completedTopics}
        />
        <Circle
          number="6"
          name="Finalise"
          topic="final"
          completedTopics={this.props.completedTopics}
          currentNode={this.props.currentPageNode}
        />
      </div>
    );
  }
}

export default ProgressBar;
