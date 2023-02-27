import React from "react";
import "../../styles/drop-down-menu.css";

export default class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeData: this.props.activeData,
      isMenuOpen: false,
    };
  }
  toggleMenu = () => {
    this.setState((prevState) => {
      prevState.isMenuOpen = prevState.isMenuOpen ? false : true;
      return {
        isMenuOpen: prevState.isMenuOpen,
      };
    });
  };
  // componentDidUpdate() {
  //   // update the activeData state if data has been updated
  //   if (this.props.activeData !== this.state.activeData) {
  //     this.setState({ activeData: this.props.activeData });
  //   }
  // }
  render() {
    return (
      <div className="drop-down-container">
        <span>Font Style</span>
        <div
          className={`drop-down-button ${this.state.isMenuOpen ? "open" : ""}`}
          onClick={() => {
            this.toggleMenu();
          }}
        >
          <span>{this.props.activeData}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
        {this.state.isMenuOpen ? (
          <div className="drop-down-menu">
            {this.props.options.map((option) => (
              <div
                key={option}
                className={`drop-down-option ${
                  option === this.props.activeData ? "active" : ""
                }`}
                onMouseOver={() => {
                  this.props.changeData(option);
                }}
                onMouseLeave={() => {
                  this.props.changeData(this.props.activeData);
                }}
                onClick={() => {
                  this.props.changeData(option);
                  this.props.changeActiveData(option);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
