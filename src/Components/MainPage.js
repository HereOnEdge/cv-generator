import React from "react";
import ContactMainPage from "./Pages/ContactMainPage";
import "../styles/MainPage.css";
import IntroPage from "./Pages/IntroPages";
import OthersMainPage from "./Pages/OtherMainPages";
import DescPage from "./Pages/DescriptionPage";
import SummaryPage from "./Pages/SummaryPages";

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
        navLink={navLink}
      />
    ) : page === "description" ? (
      <DescPage
        changeState={changeState}
        data={data}
        topic={topic}
        page={page}
        completedTopics={completedTopics}
        currentPageNode={currentPageNode}
      />
    ) : page === "summary" ? (
      <SummaryPage
        changeState={changeState}
        data={data}
        topic={topic}
        page={page}
        completedTopics={completedTopics}
        currentPageNode={currentPageNode}
        navLink={navLink}
      />
    ) : (
      "where am I"
    );
  }
}

export default MainPage;
