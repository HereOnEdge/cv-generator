import React from "react";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import PreviewButton from "../Preview/PreviewButton";
import PreviewContainer from "../Preview/PreviewContainer";
import AddNewData from "../Summary/AddNewData";
import DataSummary from "../Summary/DataSummary";
import { v1 as randomKey } from "uuid";
import Preview from "../Preview/Preview";

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
  render() {
    return (
      <div className="summary-main main">
        <div className="summary-header header">
          <h1>{this.title}</h1>
          <PreviewButton changePreviewState={this.props.changePreviewState} />
        </div>
        <div className="summary-body body">
          <div className="summary-data data">
            {this.state.data.map((item, index) =>
              item !== undefined ? (
                <DataSummary
                  index={index}
                  id={item.id}
                  data={item}
                  topic={this.props.topic}
                  page={this.props.page}
                  changeState={this.props.changeState}
                  currentPageNode={this.props.currentPageNode}
                  completedTopics={this.props.completedTopics}
                  key={randomKey()}
                  updateData={this.updateData}
                  originalData={this.props.data}
                />
              ) : null
            )}
            <AddNewData
              id={randomKey()}
              topic={this.props.topic}
              page={this.props.page}
              changeState={this.props.changeState}
              currentPageNode={this.props.currentPageNode}
              completedTopics={this.props.completedTopics}
              data={this.state[this.props.topic]}
            />
          </div>
          <div className="summary-preview whole-preview">
            <PreviewContainer
              data={this.props.data}
              changePreviewState={this.props.changePreviewState}
              topic={this.props.topic}
              page={this.props.page}
              cvDesign={this.props.cvDesign}
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
        {this.props.isPreviewVisible ? (
          <Preview
            data={this.props.data}
            cvDesign={this.props.cvDesign}
            hasCloseButton={true}
            changePreviewState={this.props.changePreviewState}
          />
        ) : null}
      </div>
    );
  }
}
export default SummaryPage;
