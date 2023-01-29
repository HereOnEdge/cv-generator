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
      <input
        type={this.props.type}
        onClick={
          this.props.type === "button"
            ? () => this.changeTextVisuals(this.props.name)
            : null
        }
        onChange={
          this.props.type === "color"
            ? (event) =>
                this.changeTextVisuals(this.props.name, event.target.value)
            : null
        }
        name={this.props.name}
        value={this.props.value !== undefined ? this.props.value : null}
      ></input>
    );
  }
}
export default EditButton;
