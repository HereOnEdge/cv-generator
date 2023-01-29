import React from "react";

class TextEditorButtons extends React.Component {
  makeBold = () => {
    this.props.changeTextVisuals("bold");
  };
  makeItalic = () => {
    this.props.changeTextVisuals("italic");
  };
  makeUnderline = () => {
    this.props.changeTextVisuals("underline");
  };
  render() {
    return (
      <div className="editor-buttons">
        <button onClick={this.makeBold}>B</button>
        <button onClick={this.makeItalic}>I</button>
        <button onClick={this.makeUnderline}>_</button>
      </div>
    );
  }
}
export default TextEditorButtons;
