import React from "react";

export default class ColorChanger extends React.Component {
  constructor(props) {
    super(props);
    this.activeColor = this.props.cvDesign.color;
  }
  render() {
    return (
      <div className="color-changer">
        {this.props.cvDesign.templateColors.map((color) => (
          <div
            className={`color-wrapper ${
              this.activeColor === color ? "active" : ""
            }`}
            key={`${color}-key`}
          >
            <div
              className="template-color"
              style={{ backgroundColor: color }}
              onClick={() => {
                this.props.changeCvDesign.color(color);
                this.activeColor = color;
              }}
              onMouseOver={() => {
                this.props.changeCvDesign.color(color);
              }}
              onMouseLeave={() =>
                this.props.changeCvDesign.color(this.activeColor)
              }
            ></div>
          </div>
        ))}
      </div>
    );
  }
}
