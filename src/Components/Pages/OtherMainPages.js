/* eslint-disable eqeqeq */
import React from "react";
import TextInput from "../Input/TextInput";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import PreviewButton from "../Preview/PreviewButton";
import DateInput from "../Input/DateInput";
import { EducateTextEditorCont } from "../TextEditor/TextEditorContainer";
import AlertBox from "../AlertBox";
import Preview from "../Preview/Preview";

class OthersMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.findInputReqs();
    this.id =
      this.props.currentPageNode.value().id == undefined
        ? 0
        : this.props.currentPageNode.value().id;
    this.state = {
      [this.props.topic]: {
        [this.id]:
          this.props.topic === "work"
            ? {
                id: this.id,
                title: "",
                employer: "",
                city: "",
                country: "",
                startDate: "",
                endDate: "",
                description:
                  this.props.data[this.props.topic] !== undefined
                    ? this.props.data[this.props.topic][this.id] !== undefined
                      ? this.props.data[this.props.topic][this.id]
                          .description === undefined
                        ? ""
                        : this.props.data[this.props.topic][this.id].description
                      : ""
                    : "",
              }
            : {
                id: this.id,
                university: "",
                location: "",
                qualification: "",
                field: "",
                startDate: "",
                endDate: "",
                description:
                  this.props.data[this.props.topic] !== undefined
                    ? this.props.data[this.props.topic][this.id] !== undefined
                      ? this.props.data[this.props.topic][this.id]
                          .description === undefined
                        ? ""
                        : this.props.data[this.props.topic][this.id].description
                      : ""
                    : "",
              },
      },
      isDescOpen:
        this.props.__isEducateDescOpen !== undefined &&
        this.props.__isEducateDescOpen === true
          ? true
          : false,
      showAlertBox: false,
      filledVitalInputs: false,
      showVitalInputs: false,
      previewData: { ...this.props.data },
    };
  }

  changeData = (field, value, id) => {
    this.setState((prevState) => {
      prevState[this.props.topic][id][field] = value;
      prevState.previewData[this.props.topic] = prevState[this.props.topic];
      this.props.changeState(
        prevState[this.props.topic],
        this.props.topic,
        this.props.page,
        this.props.currentPageNode,
        this.props.completedTopics,
        this.props.currentPageNode
      );
      return {
        [this.props.topic]: prevState[this.props.topic],
        previewData: prevState.previewData,
      };
    });
    this.checkVitalInputs();
  };
  findInputReqs = () => {
    let topic = this.props.topic;
    this.preReqs = {
      first: {
        label: topic === "work" ? "JOB TITLE" : "INSTITUTION NAME",
        field: topic === "work" ? "title" : "university",
        placeHolder:
          topic === "work"
            ? "e.g. Product Manager"
            : "e.g.University of Liverpool",
      },
      second: {
        label: topic === "work" ? "EMPLOYER" : "FIELD OF STUDY",
        field: topic === "work" ? "employer" : "field",
        placeHolder:
          topic === "work" ? "e.g. Somersby & Smithers" : "e.g. Economics",
      },
      third: {
        label: topic === "work" ? "CITY/TOWN" : "QUALIFICATION",
        field: topic === "work" ? "city" : "qualification",
        placeHolder: topic === "work" ? "e.g. Oxford" : "e.g. Bachelor of Arts",
      },
      forth: {
        label: topic === "work" ? "COUNTRY" : "CITY/COUNTRY",
        field: topic === "work" ? "country" : "location",
        placeHolder:
          topic === "work" ? "e.g. Mexico" : "e.g. Liverpool, United Kingdom",
      },
      fifth: {
        label: "START DATE",
        field: "startDate",
        placeHolder: "Select",
      },
      sixth: {
        label: "END DATE",
        field: "endDate",
        placeHolder: "Select",
      },
    };
  };
  toggleDescSection = () => {
    this.setState((prevState) => {
      prevState.isDescOpen = prevState.isDescOpen ? false : true;
      return {
        isDescOpen: prevState.isDescOpen,
      };
    });
  };
  toggleAlertBox = () => {
    this.setState((prevState) => {
      prevState.showAlertBox = prevState.showAlertBox ? false : true;
      return {
        showAlertBox: prevState.showAlertBox,
      };
    });
  };
  checkVitalInputs = () => {
    this.setState((prevState) => {
      const thePath = prevState[this.props.topic][this.id];
      if (this.props.topic === "work") {
        return {
          filledVitalInputs:
            thePath.title === "" || thePath.employer === "" ? false : true,
        };
      } else {
        return {
          filledVitalInputs:
            thePath.university === "" || thePath.field === "" ? false : true,
        };
      }
    });
  };
  showVitalInputs = () => {
    this.setState((prevState) => {
      prevState.showVitalInputs = this.state.filledVitalInputs ? false : true;
      return {
        showVitalInputs: prevState.showVitalInputs,
      };
    });
  };
  render() {
    return (
      <div className="main-container">
        <div className="others-main main">
          <div className="others-header header">
            <div className="others-title">
              <h1>
                {this.props.topic === "work"
                  ? "Tell us about your work history"
                  : "Tell us about your education"}
              </h1>
              <p>
                {this.props.topic === "work"
                  ? "Start with your most recent job and work backwards."
                  : "List universities, colleges or institutions where you studied. If you didn't attend education, then list your school or any other place of training. particulary if it corresponds to the position sought."}
              </p>
            </div>
            <PreviewButton changePreviewState={this.props.changePreviewState} />
          </div>
          <div
            className={`others-body body ${
              this.props.topic === "work" ? "" : "educate-body"
            }`}
          >
            <div className="others-form form">
              <TextInput
                className="half"
                label={this.preReqs.first.label}
                changeData={this.changeData}
                field={this.preReqs.first.field}
                placeHolder={this.preReqs.first.placeHolder}
                validationType="text"
                data={this.props.data}
                topic={this.props.topic}
                id={this.id}
                isRed={
                  this.state[this.props.topic][this.id][
                    this.preReqs.first.field
                  ] === "" && this.state.showVitalInputs
                    ? true
                    : false
                }
              />
              <TextInput
                className="half"
                label={this.preReqs.second.label}
                changeData={this.changeData}
                field={this.preReqs.second.field}
                placeHolder={this.preReqs.second.placeHolder}
                validationType="text"
                data={this.props.data}
                topic={this.props.topic}
                id={this.id}
                isRed={
                  this.state[this.props.topic][this.id][
                    this.preReqs.second.field
                  ] === "" && this.state.showVitalInputs
                    ? true
                    : false
                }
              />
              <TextInput
                className="half"
                label={this.preReqs.third.label}
                changeData={this.changeData}
                field={this.preReqs.third.field}
                placeHolder={this.preReqs.third.placeHolder}
                validationType="text"
                data={this.props.data}
                topic={this.props.topic}
                id={this.id}
              />
              <TextInput
                className="half"
                label={this.preReqs.forth.label}
                changeData={this.changeData}
                field={this.preReqs.forth.field}
                placeHolder={this.preReqs.forth.placeHolder}
                validationType="text"
                data={this.props.data}
                topic={this.props.topic}
                id={this.id}
              />
              <DateInput
                className="half"
                label={this.preReqs.fifth.label}
                changeData={this.changeData}
                field={this.preReqs.fifth.field}
                placeHolder={this.preReqs.fifth.placeHolder}
                validationType="month"
                data={this.props.data}
                topic={this.props.topic}
                id={this.id}
              />
              <DateInput
                className="half"
                label={this.preReqs.sixth.label}
                changeData={this.changeData}
                field={this.preReqs.sixth.field}
                placeHolder={this.preReqs.sixth.placeHolder}
                validationType="month"
                data={this.props.data}
                topic={this.props.topic}
                id={this.id}
              />
            </div>
            {this.props.topic === "educate" ? (
              <div
                className={`educate-desc-container ${
                  this.state.isDescOpen ? "open" : "close"
                }`}
              >
                <div className="educate-desc-title">
                  <span onClick={this.toggleDescSection}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                    ADD A DESCRIPTION TO YOUR EDUCATION{" "}
                  </span>
                  <div className="educate-desc-tip">
                    <div className="desc-tip-head">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                      </svg>
                      You can highlight relevant experiences of your academic
                      career (courses, grades, awards) or write a short
                      paragraph on your achievements or extracurricular
                      activities.
                    </div>
                    <ul>
                      <li>
                        If you are a recent graduate, this is an excellent way
                        to showcase your strengths
                      </li>
                      <li>
                        If you already have the experience, you should only add
                        essential information
                      </li>
                    </ul>
                  </div>
                </div>
                <EducateTextEditorCont
                  changeData={this.changeData}
                  placeHolder="(Optional) Type in your educational details."
                  data={this.state[this.props.topic][this.id].description}
                  topic={this.props.topic}
                  id={this.id}
                />
              </div>
            ) : null}
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
              toggleAlertBox={this.toggleAlertBox}
              originalData={this.props.data}
              filledVitalInputs={this.state.filledVitalInputs}
              showVitalInputs={this.showVitalInputs}
            />
          </div>
        </div>
        {this.state.showAlertBox ? (
          <AlertBox
            toggleAlertBox={this.toggleAlertBox}
            completedTopics={this.props.completedTopics}
            topic={this.props.topic}
            navLink={this.props.navLink}
            currentPageNode={this.props.currentPageNode}
            originalData={{ ...this.props.data[this.props.topic] }}
            changeState={this.props.changeState}
          />
        ) : null}
        {this.props.isPreviewVisible ? (
          <div className="preview-background">
            <Preview
              data={this.state.previewData}
              cvDesign={this.props.cvDesign}
              hasCloseButton={true}
              changePreviewState={this.props.changePreviewState}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default OthersMainPage;
