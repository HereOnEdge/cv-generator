import React from "react";
import ContactMainPage from "./Pages/ContactMain";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { changeState, data, page, topic } = this.props;
    return topic === "contact" ? (
      <ContactMainPage changeState={changeState} data={data} />
    ) : null;
  }
}

export default MainPage;
