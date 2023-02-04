import React from "react";
import "../../styles/TextEditor.css";
import SuggestBox from "./SuggestBox";
import TextEditor from "./TextEditor";

class TextEditorCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.saveData = this.saveData.bind(this);
  }

  saveData(value) {
    this.setState((prevState) => {
      prevState.input = value;
      return { input: prevState.input };
    });
    this.props.changeData(value, this.props.id);
  }

  render() {
    const { changeData, placeHolder, data, topic, id } = this.props;
    return (
      <div className="textEditor-container">
        <TextEditor
          saveData={this.saveData}
          placeHolder={placeHolder}
          data={data}
          topic={topic}
          id={id}
        />
        <SuggestBox data={this.state.input} topic={topic} id={id} />
      </div>
    );
  }
}
class EducateTextEditorCont extends TextEditorCont {
  saveData = (value) => {
    this.props.changeData("description", value, this.props.id);
  };
}
export { EducateTextEditorCont, TextEditorCont };
