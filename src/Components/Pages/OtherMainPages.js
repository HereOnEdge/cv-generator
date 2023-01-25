/* eslint-disable eqeqeq */
import React from "react";
import TextInput from "../TextInput";
import NavigationButtons from "../NavigationButtons";
import PreviewButton from "../PreviewButton";

class OthersMainPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    this.id =
      this.props.currentPageNode.value().id == undefined
        ? 0
        : this.props.currentPageNode.value().id;
    this.state = {
      [this.props.topic]: {
        [this.id]: {
          id: this.id,
          title: "",
          employer: "",
          city: "",
          country: "",
          startDate: "",
          endDate: "",
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
              label="JOB TITLE"
              changeData={this.changeData}
              field="title"
              placeHolder="e.g. Product Manager "
              validationType="text"
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
