import React from "react";
import ColorChanger from "../FinalPageComponents/ColorChanger";
import ResetButton from "../FinalPageComponents/ResetButton";
import TemplateChanger from "../FinalPageComponents/TemplateChanger";
import DropDownMenu from "../Input/DropDownMenu";
import RangeInput from "../Input/RangeInput";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import Preview from "../Preview/Preview";

class FinalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditTemplateOpen: false,
      isEditTextOpen: false,
      cvDesign: this.props.cvDesign, // state.cvDesign does not get used anywhere. its only for sake of rerendering
      activeFont: this.props.cvDesign.activeFont,
    };
  }
  openContainer = (field) => {
    this.setState((prevState) => {
      prevState[field] = prevState[field] ? false : true;
      return { [field]: prevState[field] };
    });
  };
  changeCvDesign = (newDesign) => {
    this.setState({ cvDesign: newDesign });
  };
  changeActiveFont = (newFont) => {
    this.setState({ activeFont: newFont });
  };
  componentDidUpdate() {
    // rerender the component if the data has changed but component has not
    if (this.props.cvDesign !== this.state.cvDesign) {
      this.changeCvDesign(this.props.cvDesign);
    }
  }
  render() {
    return (
      <div className="final-main main">
        <div className="final-header header">
          <h1>Review your cv one last time</h1>
          <p>You can change template style and many other things:)</p>
        </div>
        <div className="final-body body">
          <div className="save-options"></div>
          <Preview data={this.props.data} cvDesign={this.props.cvDesign} />
          <div className="edit-cv-section">
            <div className="cv-editBox">
              <div
                className="edit-template-button"
                onClick={() => this.openContainer("isEditTemplateOpen")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
                </svg>
                <span className="cv-edit-placeholder">
                  Templates and colors
                </span>
                <div className="openingArrow-container">
                  <div
                    className={`openingArrow ${
                      this.state.isEditTemplateOpen ? "open" : ""
                    }`}
                  ></div>
                </div>
              </div>
              {this.state.isEditTemplateOpen ? (
                <div className="edit-template-container">
                  <ColorChanger
                    cvDesign={this.props.cvDesign}
                    changeCvDesign={this.props.changeCvDesign}
                  />
                  <TemplateChanger
                    cvDesign={this.props.cvDesign}
                    changeCvDesign={this.props.changeCvDesign}
                    data={this.props.data}
                  />
                </div>
              ) : null}
              <div
                className="edit-text-button"
                onClick={() => this.openContainer("isEditTextOpen")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                </svg>
                <span className="cv-edit-placeholder">Formatting tools</span>
                <div className="openingArrow-container">
                  <div
                    className={`openingArrow ${
                      this.state.isEditTextOpen ? "open" : ""
                    }`}
                  ></div>
                </div>
              </div>
              {this.state.isEditTextOpen ? (
                <div className="edit-text-container">
                  <DropDownMenu
                    activeData={this.state.activeFont}
                    changeActiveData={this.changeActiveFont}
                    changeData={this.props.changeCvDesign.font}
                    options={this.props.cvDesign.fonts}
                  />
                  <RangeInput
                    label={"FONT SIZE"}
                    changeData={this.props.changeCvDesign.fontSize}
                    min={0.5}
                    max={4}
                    step={0.1}
                    activeValue={this.props.cvDesign.fontSize}
                    format="em"
                  />
                  <RangeInput
                    label={"HEADING SIZE"}
                    changeData={this.props.changeCvDesign.headingSize}
                    min={1}
                    max={2}
                    step={0.1}
                    activeValue={this.props.cvDesign.headingSize}
                    format="em"
                  />
                  <RangeInput
                    label={"SECTION SPACING"}
                    changeData={this.props.changeCvDesign.sectionGap}
                    min={1}
                    max={50}
                    step={1}
                    activeValue={this.props.cvDesign.gap}
                    format="px"
                  />
                  <ResetButton
                    cvDesign={this.props.cvDesign}
                    changeCvDesign={this.props.changeCvDesign}
                    changeActiveFont={this.changeActiveFont}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="final-foot foot">
          <NavigationButtons
            topic={this.props.topic}
            data={this.state[this.props.topic]}
            editData={this.props.changeState}
            page={this.props.page}
            currentPageNode={this.props.currentPageNode}
            completedTopics={this.props.completedTopics}
            hasNext={this.props.currentPageNode.next === null ? false : true}
            hasBack={this.props.currentPageNode.back === null ? false : true}
          />
        </div>
      </div>
    );
  }
}
export default FinalPage;
