import React from "react";
import ContactPreview from "./ContactPreview";
import EducatePreview from "./EducatePreview";
import ProfilePhotoPreview from "./ProfilePhotoPreview";
import SkillsPreview from "./SkillsPreview";
import SumarryPreview from "./SummaryPreview";
import WorkPreview from "./WorkPreview";
import "../../styles/Preview.css";

class Preview extends React.Component {
  componentDidUpdate() {
    console.log(this.props.data);
  }
  render() {
    return (
      <div
        className="preview"
        style={{
          fontSize: `${this.props.cvDesign.fontSize}em`,
          fontFamily: this.props.cvDesign.activeFont,
          lineHeight: this.props.cvDesign.lineSpace,
        }}
      >
        <div
          className="leftSide"
          style={{
            display: "flex",
            gap: `${this.props.cvDesign.gap}px`,
            backgroundColor: this.props.cvDesign.color,
            color: this.props.cvDesign.secondColor,
          }}
        >
          <ProfilePhotoPreview
            data={
              this.props.data !== undefined &&
              this.props.data.contact !== undefined &&
              this.props.data.contact.photoSrc !== undefined
                ? this.props.data.contact.photoSrc
                : null
            }
          />
          <SkillsPreview
            data={
              this.props.data !== undefined &&
              this.props.data.skills !== undefined &&
              this.props.data.skills.description !== undefined
                ? this.props.data.skills
                : null
            }
            highlightArea={this.props.highlightArea}
            cvDesign={this.props.cvDesign}
          />
          <EducatePreview
            data={
              this.props.data !== undefined &&
              this.props.data.educate !== undefined
                ? this.props.data.educate
                : null
            }
            highlightArea={this.props.highlightArea}
            cvDesign={this.props.cvDesign}
          />
        </div>
        <div
          className="rightSide"
          style={{
            display: "flex",
            gap: `${this.props.cvDesign.gap}px`,
            backgroundColor: this.props.cvDesign.secondColor,
            color: this.props.cvDesign.color,
          }}
        >
          {this.props.hasCloseButton ? (
            <div
              className="close-button"
              onClick={
                this.props.changePreviewState !== undefined
                  ? this.props.changePreviewState
                  : null
              }
              title="Close Preview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
          ) : null}
          <ContactPreview
            data={
              this.props.data !== undefined &&
              this.props.data.contact !== undefined
                ? this.props.data.contact
                : null
            }
            highlightArea={this.props.highlightArea}
            cvDesign={this.props.cvDesign}
          />
          <SumarryPreview
            cvDesign={this.props.cvDesign}
            data={
              this.props.data !== undefined &&
              this.props.data.summary !== undefined &&
              this.props.data.summary.description !== undefined
                ? this.props.data.summary
                : null
            }
          />
          <WorkPreview
            data={
              this.props.data !== undefined &&
              this.props.data.work !== undefined
                ? this.props.data.work
                : null
            }
            highlightArea={this.props.highlightArea}
            cvDesign={this.props.cvDesign}
          />
        </div>
      </div>
    );
  }
}

export default Preview;
