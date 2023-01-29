import React from "react";
import EditButton from "./EditButton";

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
        <EditButton type="button" name="bold" value="B" />
        <EditButton type="button" name="italic" value="I" />
        <EditButton type="button" name="underline" value="_" />
        <EditButton type="color" name="backColor" />
      </div>
    );
  }
}
export default TextEditorButtons;
