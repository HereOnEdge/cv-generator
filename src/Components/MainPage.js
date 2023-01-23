import React from "react";
import ContactMainPage from "./Pages/ContactMain";
import "../styles/MainPage.css";

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
      <div>
        <h1>{`topic :${topic}`}</h1>
        <h1>{`page: ${page}`}</h1>
        <h1>{`completed: ${completedTopics[0]}`}</h1>
        <h1>{`node: ${currentPageNode.value()}`}</h1>
      </div>
    );
  }
}

export default MainPage;
