import React from "react";
import PreviewContainer from "../PreviewContainer";
import PreviewButton from "../PreviewButton";
import NavigationButtons from "../NavigationButtons";

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
        <p>
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
      <div className={`${this.props.topic}-intro main`}>
        <div className={`${this.props.topic}-header header`}></div>
        <div className={`${this.props.topic}-body body`}>
          <h1>
            <span className="small small-title">
              {this.sideTitle}
              <br></br>
            </span>{" "}
            {this.mainTitle}
          </h1>
          {this.paragraph}
          <div className={`${this.props.topic}-preview whole-preview`}>
            <PreviewContainer
              data={this.props.data}
              highlightArea={this.props.topic}
            />
            <PreviewButton />
          </div>
        </div>
        <div className={`${this.props.topic}-foot foot`}>
          <NavigationButtons
            topic={this.props.topic}
            data={this.props.data}
            editData={this.props.changeState}
            navLink={this.props.navLink}
            page={this.props.page}
            currentPageNode={this.props.currentPageNode}
            completedTopics={this.props.completedTopics}
          />
        </div>
      </div>
    );
  }
}

export default IntroPage;
