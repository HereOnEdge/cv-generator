import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: this.props.placeHolder,
    };
  }
  removePlaceholder = (value) => {
    if (value !== "") {
      this.setState({ placeHolder: "" });
    } else {
      this.setState({ placeHolder: this.props.placeHolder });
    }
  };

  render() {
    return (
      <div className="editor-textArea-container">
        <div
          className="editor-textArea"
          contentEditable="true"
          role="textbox"
          onInput={(event) => {
            this.props.saveData(event.target.innerHTML);
            this.removePlaceholder(event.target.innerHTML);
          }}
          placeholder={this.state.placeHolder}
        ></div>
      </div>
    );
  }
}
export default TextArea;
