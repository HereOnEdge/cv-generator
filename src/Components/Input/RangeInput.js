import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default class RangeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeValue: Number(this.props.activeValue),
    };
  }
  componentDidUpdate() {
    // update and rerender the component when the active value has changed
    if (Number(this.props.activeValue) !== this.state.activeValue) {
      this.setState({
        activeValue: Number(this.props.activeValue),
      });
    }
  }
  render() {
    return (
      <div className="range-input">
        <span className="range-input-label-container">
          <span>{this.props.label}</span>
          <span>
            {this.state.activeValue}
            {this.props.format !== undefined ? this.props.format : null}
          </span>
        </span>
        <InputRange
          type={"range"}
          minValue={this.props.min}
          maxValue={this.props.max}
          value={this.state.activeValue}
          step={this.props.step}
          formatLabel={(value) =>
            `${value} ${
              this.props.format !== undefined ? this.props.format : ""
            }`
          }
          onChange={(val) => {
            val = Number(val.toFixed(1));
            this.props.changeData(val);
            this.setState({ activeValue: val });
          }}
        />
      </div>
    );
  }
}
