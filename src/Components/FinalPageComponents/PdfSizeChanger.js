import React from "react";

export default class PdfSizeChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfFormats: ["A5", "A4", "A3"],
      isEditFormatOpen: false,
    };
  }
  toggleEditPdfFormat = () => {
    this.setState((prevState) => {
      return {
        isEditFormatOpen: prevState.isEditFormatOpen ? false : true,
      };
    });
  };
  render() {
    return (
      <span className="paper-size" title="Edit Page Size">
        Paper size -{" "}
        <span className={`${this.state.isEditFormatOpen ? "open" : ""}`}>
          <span className="bold" onClick={this.toggleEditPdfFormat}>
            {this.props.activeFormat}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={`${this.state.isEditFormatOpen ? "open" : ""}`}
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </span>
          {this.state.isEditFormatOpen ? (
            <div className="edit-format-options-container">
              {this.state.pdfFormats.map((val) =>
                this.props.activeFormat !== val ? (
                  <div
                    key={val}
                    onClick={() => {
                      this.props.changeFormat(val);
                      this.toggleEditPdfFormat();
                    }}
                  >
                    {val}
                  </div>
                ) : null
              )}
            </div>
          ) : null}
        </span>
      </span>
    );
  }
}
