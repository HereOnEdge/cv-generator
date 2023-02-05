import React from "react";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import "../../styles/NavigationButtons.css";

class NavigationButtons extends React.Component {
  constructor(props) {
    super(props);
    this.topic = this.props.topic;
    this.editData = this.props.editData;
  }
  findNextPage(next) {
    if (next === "n") {
      this.buttonType = "next";
      next = "next";
    } else if (next === "b") {
      this.buttonType = "back";
      next = "back";
    }
    this.currentPage = this.props.currentPageNode;
    this.nextPage = this.currentPage[next];
    if (this.nextPage !== null) {
      const nextPageData = this.nextPage.value();
      this.nextPageTopic = nextPageData.topic;
      this.nextPagePage = nextPageData.page;
    }
  }
  findNextPageName() {
    return (this.buttonName =
      this.buttonType === "back"
        ? "Back"
        : this.nextPageTopic === "work"
        ? "Work History"
        : this.nextPageTopic === "educate"
        ? "Education"
        : this.nextPageTopic === "skills"
        ? "Skills"
        : this.nextPageTopic === "summary"
        ? "Professional Summary"
        : this.nextPageTopic === "final"
        ? "Save & next"
        : "Who Knows!!!");
  }
  render() {
    return (
      <div className="navigation-buttons">
        <NextButton
          topic={this.topic}
          data={this.props.data}
          editData={this.editData}
          page={this.props.page}
          findNextPage={this.findNextPage}
          findNextPageName={this.findNextPageName}
          currentPageNode={this.props.currentPageNode}
          completedTopics={this.props.completedTopics}
          enable={this.props.hasNext}
          toggleAlertBox={this.props.toggleAlertBox}
          filledVitalInputs={this.props.filledVitalInputs}
          showVitalInputs={this.props.showVitalInputs}
        />
        <BackButton
          topic={this.topic}
          data={this.props.data}
          editData={this.editData}
          page={this.props.page}
          findNextPage={this.findNextPage}
          findNextPageName={this.findNextPageName}
          currentPageNode={this.props.currentPageNode}
          completedTopics={this.props.completedTopics}
          enable={this.props.hasBack}
          originalData={this.props.originalData}
          filledVitalInputs={this.props.filledVitalInputs}
        />
      </div>
    );
  }
}

export default NavigationButtons;
