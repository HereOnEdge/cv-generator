import React from "react";

class EditButton extends React.Component {
  changeTextVisuals = (action) => {
    document.execCommand(action, false, null);
    document.querySelector(".editor-textArea").focus();
  };

  render() {
    return (
      <input
        type={this.props.type}
        onClick={() => this.changeTextVisuals(this.props.name)}
        name={this.props.name}
        value={this.props.value}
      ></input>
    );
  }
}
export default EditButton;
