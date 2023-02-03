/* eslint-disable eqeqeq */
import React from "react";
import TextInput from "../Input/TextInput";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import PreviewButton from "../Preview/PreviewButton";
import DateInput from "../Input/DateInput";

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
    };
  }

  changeData = (field, value, id) => {
    this.setState((prevState) => {
      prevState[this.props.topic][id][field] = value;
      return {
        [this.props.topic]: prevState[this.props.topic],
      };
    });
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
        label: topic === "work" ? "EMPLOYER" : "CITY/COUNTRY",
        field: topic === "work" ? "employer" : "location",
        placeHolder:
          topic === "work"
            ? "e.g. Somersby & Smithers"
            : "e.g. Liverpool, United Kingdom",
      },
      third: {
        label: topic === "work" ? "CITY/TOWN" : "QUALIFICATION",
        field: topic === "work" ? "city" : "qualification",
        placeHolder: topic === "work" ? "e.g. Oxford" : "e.g. Bachelor of Arts",
      },
      forth: {
        label: topic === "work" ? "COUNTRY" : "FIELD OF STUDY",
        field: topic === "work" ? "country" : "field",
        placeHolder: topic === "work" ? "e.g. Mexico" : "e.g. Economics",
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
  render() {
    return (
      <div className="others-main main">
        <div className="others-header header">
          <div className="others-title">
            <h1>Tell us about your work history</h1>
            <p>Start with your most recent job and work backwards.</p>
          </div>
          <PreviewButton />
        </div>
        <div className="others-body body">
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

export default OthersMainPage;
