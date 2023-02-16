import React from "react";

class SkillsPreview extends React.Component {
  render() {
    return (
      <div
        className={`skills ${
          this.props.highlightArea === "skills" ? "highlight" : ""
        }`}
      >
        <h1
          className="preview-header"
          style={{ fontSize: `${this.props.cvDesign.headingSize}em` }}
        >
          SKILLS
        </h1>
        {this.props.data !== null && this.props.data.description !== "" ? (
          <div
            className="skills-data-container"
            dangerouslySetInnerHTML={{
              __html: this.props.data.description,
            }}
          ></div>
        ) : this.props.data === null ? (
          <ul>
            <li>Strong verbal communication</li>
            <li>Attention to detail</li>
            <li>Community activities</li>
            <li>Medication adminstration</li>
            <li>Client safety and Firat Aid</li>
            <li>Compassionate client care</li>
          </ul>
        ) : this.props.data.description === "" ? null : null}
      </div>
    );
  }
}

export default SkillsPreview;
