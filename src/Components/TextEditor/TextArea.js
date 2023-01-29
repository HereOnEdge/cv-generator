import React from "react";

class TextArea extends React.Component {
  render() {
    return (
      <div className="editor-textArea-container">
        <div
          className="editor-textArea"
          contentEditable="true"
          role="textbox"
          onInput={(event) => this.props.saveData(event.target.innerHTML)}
        ></div>
      </div>
    );
  }
}
export default TextArea;
