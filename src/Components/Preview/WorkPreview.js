import React from "react";

class WorkPreview extends React.Component {
  constructor(props) {
    super(props);
    this.createWorkDataElement();
  }

  createWorkDataElement = () => {
    this.workDataElement =
      this.props.data !== null ? (
        Object.keys(this.props.data).map((key) => (
          <div className="work-data">
            <div className="work-date-container">
              <span className="italic">{this.props.data[key].startDate}</span>/
              <span className="italic">{this.props.data[key].endDate}</span>
            </div>
            <div className="work-employer-container">
              <span className="bold">{this.props.data[key].employer}</span>{" "}
              <div className="between-line"></div>{" "}
              <span>{`${
                this.props.data[key].country !== ""
                  ? this.props.data[key].country
                  : ""
              } - ${
                this.props.data[key].city !== ""
                  ? this.props.data[key].city
                  : ""
              }`}</span>
            </div>
            <div className="work-title-container">
              <span>{this.props.data[key].title}</span>
            </div>
            <div
              className="work-desc-container"
              dangerouslySetInnerHTML={{
                __html: this.props.data[key].description,
              }}
            ></div>
          </div>
        ))
      ) : (
        <div className="work-data">
          <div className="work-date-container">
            <span className="italic">07/2021 - 11/2022</span>
          </div>
          <div className="work-employer-container">
            <span className="bold">Private Care Home</span>{" "}
            <div className="between-line"></div> <span>Liverpool</span>
          </div>
          <div className="work-title-container">Senior Care Assistant</div>
          <div className="work-desc-container">
            <ul>
              <li>
                Met with patients and families to discuss care and plan of
                action for future
              </li>
              <li>Implemented four weeks to two</li>
              <li>
                Administered all necessary medications as directed by care plan
              </li>
            </ul>
          </div>
        </div>
      );
  };
  componentDidUpdate() {
    this.createWorkDataElement();
  }
  render() {
    return (
      <div
        className={`workHistory ${
          this.props.highlightArea === "work" ? "highlight" : ""
        }`}
      >
        <h1
          style={{ fontSize: `${this.props.cvDesign.headingSize}em` }}
          className="preview-header"
        >
          WORK HISTORY
        </h1>
        {this.workDataElement}
      </div>
    );
  }
}
export default WorkPreview;
