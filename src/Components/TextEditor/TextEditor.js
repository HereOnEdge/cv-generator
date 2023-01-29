import React from "react";
import TextArea from "./TextArea";
import TextEditorButtons from "./TextEditorButtons";

class TextEditor extends React.Component {
  render() {
    return (
      <div className="textEditor">
        <TextEditorButtons />
        <TextArea
          saveData={this.props.saveData}
          id={this.props.id}
          data={this.props.data}
          placeHolder={this.props.placeHolder}
        />
      </div>
    );
  }
}
export default TextEditor;
