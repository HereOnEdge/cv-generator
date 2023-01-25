import React from "react";
import ContactMainPage from "./Pages/ContactMainPage";
import "../styles/MainPage.css";
import IntroPage from "./Pages/IntroPages";
import OthersMainPage from "./Pages/OtherMainPages";

class MainPage extends React.Component {
  render() {
    const { changeState, data, page, topic, completedTopics, currentPageNode } =
      this.props;
    return topic === "contact" ? (
      <ContactMainPage
        changeState={changeState}
        data={data}
        topic={topic}
        page={page}
        completedTopics={completedTopics}
        currentPageNode={currentPageNode}
      />
    ) : page === "intro" ? (
      <IntroPage
        changeState={changeState}
        data={data}
        topic={topic}
        page={page}
        completedTopics={completedTopics}
        currentPageNode={currentPageNode}
      />
    ) : page === "main" ? (
      <OthersMainPage
        changeState={changeState}
        data={data}
        topic={topic}
        page={page}
        completedTopics={completedTopics}
        currentPageNode={currentPageNode}
      />
    ) : (
      "where am I"
    );
  }
}

export default MainPage;
