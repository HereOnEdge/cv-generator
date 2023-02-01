/* eslint-disable eqeqeq */
import React from "react";
import PreviewButton from "../Preview/PreviewButton";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import TextEditorCont from "../TextEditor/TextEditorContainer";

class DescPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    if (this.props.topic === "work") {
      this.id =
        this.props.currentPageNode.value().id == undefined
          ? 0
          : this.props.currentPageNode.value().id;
    }
    this.state =
      this.props.topic === "work"
        ? {
            [this.props.topic]: {
              [this.id]: {
                ...this.props.data[this.props.topic][this.id],
                description:
                  this.props.data[this.props.topic][this.id].description !==
                  undefined
                    ? this.props.data[this.props.topic][this.id].description
                    : "",
              },
            },
          }
        : {
            [this.props.topic]: {
              description: "",
            },
          };
    this.findTitles();
  }
  findTitles() {
    if (this.props.topic === "work") {
      this.jobTitle = (
        <span className="bold">
          {this.props.data[this.props.topic][this.id].title}
        </span>
      );
      this.jobEmployer = this.props.data[this.props.topic][this.id].employer;
      this.pageTitle = "Describe your experience";
      this.pageParagraph = (
        <span>
          {this.jobTitle} | {this.jobEmployer}
        </span>
      );
    } else if (this.props.topic === "skills") {
      this.pageTitle = "Highlight relevant skills for the job you want";
      this.pageParagraph =
        "Start with our expert recommendations by job title or pull the skills required from the job description";
    } else if (this.props.topic === "summary") {
      this.pageTitle = "Briefly tell us about your background";
      this.pageParagraph =
        "Use the samples below, and tailor them to fit your experience and the role";
    }
  }
  changeData = (value, id) => {
    if (this.props.topic === "work") {
      this.setState((prevState) => {
        prevState[this.props.topic][id].description = value;
        return {
          [this.props.topic]: prevState[this.props.topic],
        };
      });
    } else {
      this.setState((prevState) => {
        prevState[this.props.topic].description = value;
        return {
          [this.props.topic]: prevState[this.props.topic],
        };
      });
    }
  };
  render() {
    return (
      <div className="desc-main main">
        <div className="desc-header header">
          <div className="desc-title">
            <h1>{this.pageTitle}</h1>
            <p>{this.pageParagraph}</p>
          </div>
          <PreviewButton />
        </div>
        <div className="desc-body body">
          <TextEditorCont
            changeData={this.changeData}
            placeHolder={
              this.props.topic === "work"
                ? "Type in your responsibilities, achivements and job details."
                : `Add your ${this.props.topic} here.`
            }
            data={
              this.props.topic !== "work"
                ? this.state[this.props.topic].description
                : this.state[this.props.topic][this.id].description
            }
            topic={this.props.topic}
            id={this.id !== undefined ? this.id : null}
          />
        </div>
        <div className="contact-foot foot">
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
export default DescPage;
