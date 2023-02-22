import React from "react";

export default class ResetButton extends React.Component {
  setDefaultValues = () => {
    this.defaultValues = {
      ...this.props.cvDesign,
      activeFont: "Verdana",
      fontSize: "1",
      headingSize: "1.4",
      gap: "5",
      lineSpace: "1",
    };
  };
  render() {
    return (
      <div
        className="reset-button"
        onClick={() => {
          this.setDefaultValues();
          this.props.changeCvDesign.all(this.defaultValues);
          this.props.changeActiveFont(this.defaultValues.activeFont);
        }}
      >
        Reset Formatting
      </div>
    );
  }
}
