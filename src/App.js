import React from "react";
import "./styles/App.css";
import MainPage from "./Components/MainPage";
import ProgressBar from "./Components/ProgressBar";
import { node, linkedList } from "@reza2022/linked-list";

class App extends React.Component {
  constructor() {
    super();
    this.makeLinkedList();
    this.state = {
      topic: this.navLink.head.value().topic,
      page: this.navLink.head.value().page,
      data: {},
      completedTopics: [],
      currentPageNode: this.navLink.head,
    };

    this.stateHandler = this.stateHandler.bind(this);
  }

  stateHandler(
    data,
    topic,
    page,
    currentPageNode,
    completedTopics,
    newPageNode
  ) {
    this.setState((prevState) => {
      if (data !== prevState.data) {
        // update data only if it has changed
        prevState.data[currentPageNode.value().topic] = data;
      }
      return {
        topic: topic,
        page: page,
        data: prevState.data,
        completedTopics: completedTopics,
        currentPageNode: newPageNode,
      };
    });
  }

  makeLinkedList = () => {
    const contactNode = node({ topic: "contact", page: "main" }, null, null);
    this.navLink = linkedList(contactNode);
    this.navLink.append({ topic: "work", page: "intro" });
    this.navLink.append({ topic: "work", page: "main" });
    this.navLink.append({ topic: "work", page: "description" });
    this.navLink.append({ topic: "work", page: "summary" });
    this.navLink.append({ topic: "educate", page: "intro" });
    this.navLink.append({ topic: "educate", page: "main" });
    this.navLink.append({ topic: "educate", page: "summary" });
    this.navLink.append({ topic: "skills", page: "intro" });
    this.navLink.append({ topic: "skills", page: "description" });
    this.navLink.append({ topic: "skills", page: "summary" });
    this.navLink.append({ topic: "summary", page: "intro" });
    this.navLink.append({ topic: "summary", page: "description" });
    this.navLink.append({ topic: "final", page: "main" });
  };

  render() {
    return (
      <div>
        <header>
          <ProgressBar
            topic={this.state.topic}
            completedTopics={this.state.completedTopics}
            currentPageNode={this.state.currentPageNode}
          />
        </header>
        <main>
          <MainPage
            changeState={this.stateHandler}
            data={this.state.data}
            page={this.state.page}
            topic={this.state.topic}
            completedTopics={this.state.completedTopics}
            currentPageNode={this.state.currentPageNode}
          />
        </main>
      </div>
    );
  }
}

export default App;

// {
//   contact: {
//     firstName: "",
//     lastName: "",
//     country: "",
//     city: "",
//     address: "",
//     phone: "",
//     email: "",
//     website: "",
//   },
//   workHistory: {
//     job1: {
//       title: "",
//       employer: "",
//       city: "",
//       country: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//     },
//   },
//   education: {
//     diploma1: {
//       university: "",
//       location: "",
//       qualification: "",
//       field: "",
//       startDate: "",
//       endDate: "",
//     },
//   },
//   skills: {},
//   summary: "",
// },
