import React from "react";
import ContactMainPage from "./Pages/ContactMainPage";
import "../styles/MainPage.css";
import IntroPage from "./Pages/IntroPages";
import OthersMainPage from "./Pages/OtherMainPages";
import DescPage from "./Pages/DescriptionPage";
import SummaryPage from "./Pages/SummaryPages";
import FinalPage from "./Pages/FinalPage";

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
      __isEducateDescOpen,
      __cvDesign,
      changeCvDesign,
    } = this.props;
    return topic === "contact" ? (
      <ContactMainPage
        changeState={changeState}
        data={data}
        topic={topic}
        page={page}
        completedTopics={completedTopics}
        currentPageNode={currentPageNode}
        cvDesign={__cvDesign}
      />
    ) : page === "intro" ? (
      <IntroPage
        changeState={changeState}
        data={data}
        topic={topic}
        page={page}
        completedTopics={completedTopics}
        currentPageNode={currentPageNode}
        cvDesign={__cvDesign}
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
        __isEducateDescOpen={__isEducateDescOpen}
        cvDesign={__cvDesign}
      />
    ) : page === "description" ? (
      <DescPage
        changeState={changeState}
        data={data}
        topic={topic}
        page={page}
        completedTopics={completedTopics}
        currentPageNode={currentPageNode}
        cvDesign={__cvDesign}
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
        cvDesign={__cvDesign}
      />
    ) : topic === "final" ? (
      <FinalPage
        changeState={changeState}
        data={data}
        topic={topic}
        page={page}
        completedTopics={completedTopics}
        currentPageNode={currentPageNode}
        cvDesign={__cvDesign}
        changeCvDesign={changeCvDesign}
      />
    ) : (
      "where am I"
    );
  }
}

export default MainPage;
