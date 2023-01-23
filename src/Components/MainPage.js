import React from "react";
import ContactMainPage from "./Pages/ContactMain";
import "../styles/MainPage.css";
import IntroPage from "./Pages/IntroPages";

class MainPage extends React.Component {
  render() {
    const {
      changeState,
      data,
      page,
      topic,
      completedTopics,
      currentPageNode,
      navLink,
    } = this.props;
    return topic === "contact" ? (
      <ContactMainPage
        changeState={changeState}
        data={data}
        topic={topic}
        page={page}
        completedTopics={completedTopics}
        navLink={navLink}
        currentPageNode={currentPageNode}
      />
    ) : (
      <IntroPage data={data} />
    );
  }
}

export default MainPage;
