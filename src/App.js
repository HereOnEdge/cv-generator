/* eslint-disable eqeqeq */
import React from "react";
import "./styles/App.css";
import MainPage from "./Components/MainPage";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
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
      __isEducateDescOpen: undefined,
      __cvDesign: {
        templates: ["default"],
        activeTemplate: "default",
        templateColors: ["#3a3a3a", "#23a3e3", "#ee00e0", "#23ee7a", "#901232"],
        color: "#3a3a3a",
        secondColor: "#ffffff",
        fonts: [
          "Verdana",
          "Serif",
          "Arial",
          "Arial Narrow",
          "Times",
          "Times New Roman",
          "Helvetica",
          "Courier",
          "Courier New",
          "Candara",
          "Geneva",
          "Calibri",
          "Cambria",
          "Garamond",
          "Lucidia Bright",
          "Copperplate",
        ],
        activeFont: "Verdana",
        fontSize: "1",
        headingSize: "1.4",
        gap: "1",
        lineSpace: "1",
        upDownMargin: "1",
        photoSize: "100",
      },
      previewVisible: false,
    };

    this.stateHandler = this.stateHandler.bind(this);
  }

  stateHandler(
    data,
    topic,
    page,
    currentPageNode,
    completedTopics,
    newPageNode,
    __isEducateDescOpen,
    callBackFunc
  ) {
    this.setState(
      (prevState) => {
        // if we are editing data in summary page, it means we are deleting somthing
        if (
          currentPageNode.value().page === "summary" &&
          newPageNode.value().page === "summary"
        ) {
          // find the id of peace of info that we are going to delete
          let id = Object.keys(data)[0];
          // delete the peace of info and update the data
          prevState.data[currentPageNode.value().topic][id] = data[id];
          delete prevState.data[currentPageNode.value().topic][id];
          return {
            topic: topic,
            page: page,
            data: prevState.data,
            completedTopics: completedTopics,
            currentPageNode: newPageNode,
          };
        }
        if (data !== prevState.data) {
          // update data only if it has changed
          if (
            currentPageNode.value().topic === "work" ||
            currentPageNode.value().topic === "educate"
          ) {
            // if data is coming from work or educate and there is already a data available from them, give them index
            if (prevState.data[currentPageNode.value().topic] !== undefined) {
              let id =
                currentPageNode.value().id == undefined
                  ? 0
                  : currentPageNode.value().id;
              prevState.data[currentPageNode.value().topic][id] = data[id];
              // if new value is undefiend, remove the item from object
              if (data[id] === undefined) {
                console.log(id);
                delete prevState.data[currentPageNode.value().topic][id];
              }
            } else {
              prevState.data[currentPageNode.value().topic] = data;
            }
          } else {
            prevState.data[currentPageNode.value().topic] = data;
          }
        }
        return {
          topic: topic,
          page: page,
          data: prevState.data,
          completedTopics: completedTopics,
          currentPageNode: newPageNode,
          __isEducateDescOpen: __isEducateDescOpen === true ? true : undefined,
        };
      },
      callBackFunc !== undefined ? callBackFunc : null
    );
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
    this.navLink.append({ topic: "summary", page: "intro" });
    this.navLink.append({ topic: "summary", page: "description" });
    this.navLink.append({ topic: "final", page: "main" });
  };
  changeCvDesign = {
    all: (cvDesignObject) => {
      this.setState({ __cvDesign: cvDesignObject });
    },
    font: (font) => {
      this.setState((prevState) => {
        prevState.__cvDesign.activeFont = font;
        return {
          __cvDesign: prevState.__cvDesign,
        };
      });
    },
    template: (template) => {
      this.setState((prevState) => {
        prevState.__cvDesign.activeTemplate = template;
        return {
          __cvDesign: prevState.__cvDesign,
        };
      });
    },
    fontSize: (size) => {
      this.setState((prevState) => {
        prevState.__cvDesign.fontSize = size;
        return {
          __cvDesign: prevState.__cvDesign,
        };
      });
    },
    headingSize: (size) => {
      this.setState((prevState) => {
        prevState.__cvDesign.headingSize = size;
        return {
          __cvDesign: prevState.__cvDesign,
        };
      });
    },
    sectionGap: (size) => {
      this.setState((prevState) => {
        prevState.__cvDesign.gap = size;
        return {
          __cvDesign: prevState.__cvDesign,
        };
      });
    },
    lineSpace: (size) => {
      this.setState((prevState) => {
        prevState.__cvDesign.lineSpace = size;
        return {
          __cvDesign: prevState.__cvDesign,
        };
      });
    },
    color: (col) => {
      this.setState((prevState) => {
        prevState.__cvDesign.color = col;
        return {
          __cvDesign: prevState.__cvDesign,
        };
      });
    },
    upDownMargin: (margin) => {
      this.setState((prevState) => {
        prevState.__cvDesign.upDownMargin = margin;
        return {
          __cvDesign: prevState.__cvDesign,
        };
      });
    },
    photoSize: (size) => {
      this.setState((prevState) => {
        prevState.__cvDesign.photoSize = size;
        return {
          __cvDesign: prevState.__cvDesign,
        };
      });
    },
  };

  changePreviewState = () => {
    this.setState((prevState) => {
      return prevState.previewVisible
        ? { previewVisible: false }
        : { previewVisible: true };
    });
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
            navLink={this.navLink}
            __isEducateDescOpen={this.state.__isEducateDescOpen}
            __cvDesign={this.state.__cvDesign}
            changeCvDesign={this.changeCvDesign}
            isPreviewVisible={this.state.previewVisible}
            changePreviewState={this.changePreviewState}
          />
        </main>
      </div>
    );
  }
}

export default App;
