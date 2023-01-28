import React from "react";

class SuggestBox extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    return (
      <div
        className="suggestBox"
        // dangerouslySetInnerHTML={{ __html: this.props.data }}
      ></div>
    );
  }
}
export default SuggestBox;
