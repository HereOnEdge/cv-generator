import React from "react";
import EditDataButton from "./EditData";
import RemoveDataButton from "./RemoveData";

class DataSummary extends React.Component {
  constructor(props) {
    super(props);
    this.findTitle();
  }

  findTitle = () => {
    if (this.props.topic === "work") {
      console.log(this.props.data);
      this.mainTitle = this.props.data.title;
      this.secondTitle = this.props.data.employer;
    } else {
      this.mainTitle = this.props.data.field;
      this.secondTitle = this.props.university;
    }
  };

  render() {
    return (
      <div className="data-summary">
        <div className="summary-id">{this.props.id + 1}</div>
        <div className="data-summary-main">
          <div className="summary-title">
            <span className="bold">{this.mainTitle}</span>, {this.secondTitle}
          </div>
          <EditDataButton />
          <RemoveDataButton
            changeState={this.props.changeState}
            data={this.props.data}
            topic={this.props.topic}
            page={this.props.page}
            currentPageNode={this.props.currentPageNode}
            completedTopics={this.props.completedTopics}
            id={this.props.id}
            updateData={this.props.updateData}
          />
          <div className="summary-description">
            {this.props.data.description !== "" ? (
              <ul>
                <li
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.description,
                  }}
                ></li>
              </ul>
            ) : (
              <div className="add-description">
                <span className="plus">+</span> <span>Add a description</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default DataSummary;
