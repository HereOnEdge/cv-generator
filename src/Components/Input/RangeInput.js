import React from "react";

export default class RangeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeValue: this.props.activeValue,
    };
  }
  render() {
    return (
      <div className="range-input">
        <span>{this.props.label}</span>
        <span>{this.state.activeValue}</span>
        <input
          type={"range"}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={(e) => {
            console.log(e);
            this.props.changeData(e.target.value);
            this.setState({ activeValue: e.target.value });
          }}
        ></input>
      </div>
    );
  }
}
