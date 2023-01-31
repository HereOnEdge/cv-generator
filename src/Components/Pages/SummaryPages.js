import React from "react";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import PreviewButton from "../Preview/PreviewButton";
import PreviewContainer from "../Preview/PreviewContainer";
import DataSummary from "../Summary/DataSummary";

class SummaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.id =
      this.props.currentPageNode.value().id === undefined
        ? 0
        : this.props.currentPageNode.value().id;
    this.findData();
    this.findTitle();
    this.state = {
      data: this.items,
    };
  }
  findTitle = () => {
    this.title =
      this.props.topic === "work"
        ? "Work history summary"
        : this.props.topic === "educate"
        ? "Education summary"
        : null;
  };

  findData = () => {
    this.items = [];
    for (const itemKey in this.props.data[this.props.topic]) {
      this.items.push(this.props.data[this.props.topic][itemKey]);
    }
    console.log(this.items);
  };

  updateData = () => {
    this.findData();
    this.setState({
      data: this.items,
    });
  };
  //   updateLinkedList = () => {
  //     this.props.navLink.
  //   }
  render() {
    return (
      <div className="summary-main main">
        <div className="summary-header header">
          <h1>{this.title}</h1>
          <PreviewButton />
        </div>
        <div className="summary-body body">
          <div className="summary-data data">
            {this.state.data.map((item) => (
              <DataSummary
                id={item.id}
                data={item}
                topic={this.props.topic}
                page={this.props.page}
                changeState={this.props.changeState}
                currentPageNode={this.props.currentPageNode}
                completedTopics={this.props.completedTopics}
                key={item.id.toString()}
                updateData={this.updateData}
              />
            ))}
          </div>
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
