import React from "react";
import PreviewContainer from "../Preview/PreviewContainer";
import PreviewButton from "../Preview/PreviewButton";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    this.findTitles();
  }

  findTitles() {
    if (this.props.topic === "work") {
      this.mainTitle = "work history";
      this.sideTitle = "Now, let's fill out your";
      this.paragraph = (
        <p className="intro-p">
          Here's what you need to know:
          <br />
          Employers scan your CV for six seconds to decide if you're a match
          <br />
          We'll suggest bullet points that make a great impression
        </p>
      );
    }
  }
  render() {
    return (
      <div className="intro-main main">
        <div className="intro-header header"></div>
        <div className="intro-body body">
          <div className="intro-data data">
            <h1>
              <span className="small small-title">
                {this.sideTitle}
                <br></br>
              </span>{" "}
              {this.mainTitle}
            </h1>
            {this.paragraph}
          </div>
          <div className={`intro-preview whole-preview`}>
            <PreviewContainer
              data={this.props.data}
              highlightArea={this.props.topic}
            />
            <PreviewButton />
          </div>
        </div>
        <div className={`intro-foot foot`}>
          <NavigationButtons
            topic={this.props.topic}
            data={this.props.data}
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

export default IntroPage;
