import React from "react";
import TextArea from "./TextArea";
import TextEditorButtons from "./TextEditorButtons";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bold: false,
      italic: false,
      underline: false,
      list: false,
    };
  }

  render() {
    return (
      <div className="textEditor">
        <TextEditorButtons changeTextVisuals={this.props.changeTextVisuals} />
        <TextArea
          saveData={this.props.saveData}
          id={this.props.id}
          data={this.props.data}
        />
      </div>
    );
  }
}
export default TextEditor;
