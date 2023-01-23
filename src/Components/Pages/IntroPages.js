import React from "react";

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
    this.showData();
  }

  showData() {
    console.log(this.props.data);
  }
  render() {
    return <h1>{this.props.data.data.contact.firstName}</h1>;
  }
}

export default IntroPage;
