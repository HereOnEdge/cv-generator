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
    this.updateLinkedList();
    this.state = {
      data: this.items,
      [this.props.topic]: {
        ...this.props.data[this.props.topic],
      },
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
  };

  updateData = () => {
    this.findData();
    this.setState({
      data: this.items,
      [this.props.topic]: { ...this.props.data[this.props.topic] },
    });
  };
  updateLinkedList = () => {
    // find index of main page inside linked-list
    const mainPageIndex = this.props.navLink.findIndex({
      topic: this.props.topic,
      page: "main",
    });
    // remove it if its not null
    if (mainPageIndex !== null) {
      this.props.navLink.removeAt(mainPageIndex);
    }
    // find index of desc page if it's available
    const descPageIndex = this.props.navLink.contains({
      topic: this.props.topic,
      page: "description",
    })
      ? this.props.navLink.findIndex({
          topic: this.props.topic,
          page: "description",
        })
      : null;
    // remove it if it's not null
    if (descPageIndex !== null) {
      this.props.navLink.removeAt(descPageIndex);
    }
  };
  componentDidMount() {
    console.log(this.props.data);
  }
  componentDidUpdate() {
    console.log(this.props.data);
  }
  render() {
    return (
      <div className="summary-main main">
        <div className="summary-header header">
          <h1>{this.title}</h1>
          <PreviewButton />
        </div>
        <div className="summary-body body">
          <div className="summary-data data">
            {this.state.data.map((item) =>
              item !== null ? (
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
              ) : null
            )}
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
            data={this.state[this.props.topic]}
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
