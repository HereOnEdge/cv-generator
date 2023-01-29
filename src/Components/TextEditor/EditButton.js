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
      <div>
        <button
          type="button"
          onClick={() => this.changeTextVisuals(this.props.name)}
          name={this.props.name}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}
export default EditButton;
