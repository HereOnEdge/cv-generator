import React from "react";

class SuggestBox extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    return <div className="suggestBox"></div>;
  }
}
export default SuggestBox;
