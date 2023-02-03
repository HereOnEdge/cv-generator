import React from "react";
import AddDesc from "./AddDescription";
import EditDataButton from "./EditData";
import RemoveDataButton from "./RemoveData";

class DataSummary extends React.Component {
  constructor(props) {
    super(props);
    this.findTitle();
  }

  findTitle = () => {
    if (this.props.topic === "work") {
      this.mainTitle = this.props.data.title;
      this.secondTitle = this.props.data.employer;
    } else {
      this.mainTitle = this.props.data.field;
      this.secondTitle = this.props.data.university;
    }
  };

  render() {
    return (
      <div className="data-summary">
        <div className="summary-id">{this.props.index + 1}</div>
        <div className="data-summary-main">
          <div className="summary-title">
            <span className="bold">{this.mainTitle}</span>, {this.secondTitle}
          </div>
          <div className="summary-buttons">
            <EditDataButton
              changeState={this.props.changeState}
              data={this.props.data}
              topic={this.props.topic}
              page={this.props.page}
              currentPageNode={this.props.currentPageNode}
              completedTopics={this.props.completedTopics}
              id={this.props.id}
              updateData={this.props.updateData}
            />
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
          </div>
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
              <AddDesc
                changeState={this.props.changeState}
                data={this.props.data}
                topic={this.props.topic}
                currentPageNode={this.props.currentPageNode}
                completedTopics={this.props.completedTopics}
                id={this.props.id}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default DataSummary;
