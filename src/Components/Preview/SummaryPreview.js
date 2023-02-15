import React from "react";

class SumarryPreview extends React.Component {
  constructor(props) {
    super(props);
    this.createSummaryElement();
  }
  createSummaryElement = () => {
    this.summaryElement =
      this.props.data !== null ? (
        this.props.data.description !== "" ? (
          <p
            dangerouslySetInnerHTML={{ __html: this.props.data.description }}
          ></p>
        ) : null
      ) : (
        <p>
          Motivated Care Assistant with 10 years of experience in the Care
          industry. Offering expertise in person-centered care, implementation
          and monitoring of individual care plans and management of resident
          assessments and files. Energic self-starter and team builder able to
          navigate high-stress situations. Well-versed in monitoring clients
          with developmental disabilities and adhering to patient care plans.
        </p>
      );
  };
  componentDidUpdate() {
    this.createSummaryElement();
  }
  render() {
    return (
      <div
        className={`summary-preview ${
          this.props.highlightArea === "summary" ? "highlight" : null
        }`}
      >
        <h1
          className="preview-header"
          style={{ fontSize: this.props.cvDesign.headingSize }}
        >
          PROFESSIONAL SUMMARY
        </h1>
        {this.summaryElement}
      </div>
    );
  }
}

export default SumarryPreview;
