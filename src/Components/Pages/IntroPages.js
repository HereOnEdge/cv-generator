import React from "react";
import PreviewContainer from "../Preview/PreviewContainer";
import PreviewButton from "../Preview/PreviewButton";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
    this.findTitles();
    console.log(this.props.data);
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
    } else if (this.props.topic === "educate") {
      this.mainTitle = "education";
      this.sideTitle = "Great, let's work on your";
      this.paragraph = (
        <p className="intro-p">
          Start with your most recent qualification and work backwards.
        </p>
      );
    } else if (this.props.topic === "skills") {
      this.mainTitle = "skills";
      this.sideTitle = "Next, let's take care of your";
      this.paragraph = (
        <p className="intro-p">
          Add four to eight skills from your previous jobs relevant to the job
          you want. <br />
          In original application we suggest few keywords that employers look
          for based on your title,
          <br />
          But we don't have that here. instead we got a beautiful picture from a
          wierd pink stairway.
        </p>
      );
    } else if (this.props.topic === "summary") {
      this.mainTitle = "summary";
      this.sideTitle = "Finally, let's work on your";
      this.paragraph = (
        <p className="intro-p">
          Write a career summary to show companies how your background matches
          the job you want. <br />
          If you're applying for a job you haven't done before, focus on your
          relevant experience and skills that the new job would use
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
