import React from "react";

export default class ResetButton extends React.Component {
  setDefaultValues = () => {
    this.defaultValues = {
      ...this.props.cvDesign,
      activeFont: "Verdana",
      fontSize: "0.8",
      headingSize: "1.4",
      gap: "1",
      lineSpace: "1",
      upDownMargin: "1",
      photoSize: "100",
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
        title="Reset formatting to default"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
        Reset Formatting
      </div>
    );
  }
}
