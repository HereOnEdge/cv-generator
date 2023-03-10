import React from "react";
import ContentEditable from "react-contenteditable";

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
  componentDidMount() {
    this.removePlaceholder(this.props.data);
  }
  render() {
    return (
      <div className="editor-textArea-container">
        <ContentEditable
          className="editor-textArea"
          disabled={false}
          onChange={(event) => {
            this.props.saveData(event.target.value);
            this.removePlaceholder(event.target.value);
          }}
          placeholder={this.state.placeHolder}
          html={this.props.data}
        />
      </div>
    );
  }
}
export default TextArea;
