import React from "react";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import PreviewButton from "../Preview/PreviewButton";
import PreviewContainer from "../Preview/PreviewContainer";

class SummaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.id =
      this.props.currentPageNode.value().id === undefined
        ? 0
        : this.props.currentPageNode.value().id;
    this.findTitle();
  }
  findTitle = () => {
    this.title =
      this.props.topic === "work"
        ? "Work history summary"
        : this.props.topic === "educate"
        ? "Education summary"
        : null;
  };
  render() {
    return (
      <div className="summary-main main">
        <div className="summary-header header">
          <h1>{this.title}</h1>
          <PreviewButton />
        </div>
        <div className="summary-body body">
          <div className="summary-data data"></div>
          <div className="summary-preview whole preview">
            <PreviewContainer
              data={this.props.data}
              highlightArea={this.props.topic}
            />
          </div>
        </div>
        <div className="summary-foot foot">
          <NavigationButtons
            topic={this.props.topic}
            // data={this.state[this.props.topic]}
            editData={this.props.changeState}
            page={this.props.page}
            currentPageNode={this.props.currentPageNode}
            completedTopics={this.props.completedTopics}
            hasNext={this.props.currentPageNode.next === null ? false : true}
            hasBack={this.props.currentPageNode.back === null ? false : true}
          />
        </div>
      </div>
    );
  }
}
export default SummaryPage;
