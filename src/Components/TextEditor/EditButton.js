import React from "react";

class EditButton extends React.Component {
  changeTextVisuals = (action, ...props) => {
    props !== undefined
      ? document.execCommand(action, false, ...props)
      : document.execCommand(action, false, null);
    document.querySelector(".editor-textArea").focus();
  };

  render() {
    return (
      <button
        type="button"
        onClick={() => {
          this.changeTextVisuals(this.props.action);
          this.props.toggleButton(this.props.action);
        }}
        name={this.props.name}
        className={this.props.active ? "active" : null}
      >
        {this.props.value}
      </button>
    );
  }
}
export default EditButton;
