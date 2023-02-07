import React from "react";
import Preview from "../Preview/Preview";

class FinalPage extends React.Component {
  constructor(props) {
    super(props);
    this.defaultCvStyles = this.props.cvDesign;
    this.activeFont = this.props.cvDesign.activeFont;
    this.activeTemplate = this.props.cvDesign.activeTemplate;
    this.activeTempColor = this.props.cvDesign.activeTempColor;
  }
  render() {
    return (
      <div className="final-main main">
        <div className="final-header header"></div>
        <div className="final-body body">
          <div className="save-options"></div>
          <Preview />
          <div className="edit-cv-section"></div>
        </div>
      </div>
    );
  }
}
export default FinalPage;
