import React from "react";

class EducatePreview extends React.Component {
  constructor(props) {
    super(props);
    this.createEducateDataElement();
  }
  createEducateDataElement = () => {
    this.educateDataElement =
      this.props.data !== null ? (
        Object.keys(this.props.data).map((key) => (
          <div className="education-data-container">
            <div className="education-time-container italic">
              {this.props.data[key].startDate !== undefined &&
              this.props.data[key].startDate !== ""
                ? `${this.props.data[key].startDate} / ${
                    this.props.data[key].endDate !== undefined &&
                    this.props.data[key].endDate !== ""
                      ? this.props.data[key].endDate
                      : ""
                  }`
                : ""}
            </div>
            <div className="education-university-container">
              {this.props.data[key].university !== undefined &&
              this.props.data[key].university !== "" ? (
                <div className="education-university-data">
                  <span className="bold">
                    {this.props.data[key].university}
                  </span>
                  <div className="between-line"></div>
                  {this.props.data[key].location !== undefined &&
                  this.props.data[key].location !== "" ? (
                    <span className="italic">
                      {this.props.data[key].location}
                    </span>
                  ) : null}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="education-field-container">
              <span>
                {this.props.data[key].qualification !== undefined &&
                this.props.data[key].qualification !== ""
                  ? this.props.data[key].qualification + " : "
                  : ""}
              </span>
              <span>
                {this.props.data[key].field !== undefined
                  ? this.props.data[key].field
                  : ""}
              </span>
            </div>
            <div
              className="education-desc-container"
              dangerouslySetInnerHTML={{
                __html:
                  this.props.data[key].description !== undefined &&
                  this.props.data[key].description !== ""
                    ? this.props.data[key].description
                    : "",
              }}
            ></div>
          </div>
        ))
      ) : (
        <div className="education-data-container">
          <div className="education-time-container italic">2022</div>
          <div className="education-university-container">
            <span className="bold">Edinburgh College</span>
            <div className="between-line"></div>
            <span className="italic">Edinburgh</span>
          </div>
          <div className="education-field-container">
            <span>NVQ Level 3:</span>
            <span> Health and Social Care</span>
          </div>
        </div>
      );
  };
  componentDidUpdate() {
    this.createEducateDataElement();
  }
  render() {
    return (
      <div
        className={`education ${
          this.props.highlightArea === "educate" ? "highlight" : null
        }`}
      >
        <h1
          className="preview-header"
          style={{ fontSize: this.props.cvDesign.headingSize }}
        >
          EDUCATION
        </h1>
        {this.educateDataElement}
      </div>
    );
  }
}

export default EducatePreview;
