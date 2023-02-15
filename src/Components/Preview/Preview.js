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
          fontFamily: this.props.cvDesign.activeFont,
          lineHeight: this.props.cvDesign.lineSpace,
        }}
      >
        <div
          className="leftSide"
          style={{
            display: "flex",
            gap: `${this.props.cvDesign.gap}px`,
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
          }}
        >
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
