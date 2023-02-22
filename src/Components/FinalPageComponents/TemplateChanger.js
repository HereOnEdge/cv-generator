import React from "react";
import Preview from "../Preview/Preview";

export default class TemplateChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTemplate: this.props.cvDesign.activeTemplate,
    };
  }
  componentDidUpdate() {
    if (this.state.activeTemplate !== this.props.cvDesign.activeTemplate) {
      this.setState({
        activeTemplate: this.props.cvDesign.activeTemplate,
      });
    }
  }
  render() {
    return (
      <div className="template-changer">
        {this.props.cvDesign.templates.map((template) => {
          const cvDesign = this.props.cvDesign;
          cvDesign.activeTemplate = template;
          return (
            <div
              className={`template ${
                this.state.activeTemplate === template ? "active" : ""
              }`}
              onMouseOver={() => {
                this.props.changeCvDesign.template(template);
              }}
              onMouseLeave={() => {
                this.props.changeCvDesign.template(this.state.activeTemplate);
              }}
              onClick={() => {
                this.props.changeCvDesign.template(template);
                this.setState({ activeTemplate: template });
              }}
            >
              <Preview data={this.props.data} cvDesign={cvDesign} />
            </div>
          );
        })}
      </div>
    );
  }
}
