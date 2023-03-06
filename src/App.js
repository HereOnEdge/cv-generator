import { useState, createContext } from "react";
import { node, linkedList } from "@reza2022/linked-list";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import MainPage from "./Components/MainPage";

const App = () => {
  // when App component is first initialized
  // make a navLink
  const navLinkObj = makeLinkedList();
  // extract the navlink and store it inside a variable
  const navLink = navLinkObj.navLink;
  // declare all the necessary states
  const [topic, changeTopic] = useState(navLink.head.value().topic);
  const [page, changePage] = useState(navLink.head.value().page);
  const [data, changeData] = useState({});
  const [completedTopics, changeCompletedTopics] = useState([]);
  const [currentPageNode, changeCurrentPageNode] = useState(navLink.head);
  const [isEducateDescOpen, changeIsEducateDescOpen] = useState(undefined);
  const [cvDesign, changeCvDesign] = useState(initialCvDesign);
  const [isPreviewVisible, changeIsPreviewVisible] = useState(false);

  // declare a function to change all the main states
  const stateHandler = (
    data,
    topic,
    page,
    currentPageNode,
    completedTopics,
    newPageNode,
    isEducateDescOpen
  ) => {
    // if we are editing data in summary page, it means we are deleting something
    if (
      currentPageNode.value().page === "summary" &&
      newPageNode.value().page === "summary"
    ) {
      // find the id of peace of info that we are going to delete
      let id = Object.keys(data)[0];
      // delete the peace of info and update the data
      changeData((prevState) => {
        prevState[currentPageNode.value().topic][id] = data[id];
        delete prevState[currentPageNode.value().topic][id];
        return prevState;
      });
      return;
    }
    // update data only if it has changed
    changeData((prevState) => {
      if (data !== prevState) {
        // if data is coming from work or educate and there is already a data available from them, give them index
        if (
          currentPageNode.value().topic === "work" ||
          currentPageNode.value().topic === "educate"
        ) {
          if (prevState[currentPageNode.value().topic] !== undefined) {
            let id =
              currentPageNode.value().id == undefined
                ? 0
                : currentPageNode.value().id;
            prevState[currentPageNode.value().topic][id] = data[id];
            // if new value is undefined, remove the item from object
            if (data[id] === undefined) {
              delete prevState.data[currentPageNode.value().topic][id];
            }
          } else {
            prevState[currentPageNode.value().topic] = data;
          }
        } else {
          prevState[currentPageNode.value().topic] = data;
        }
      }
      return prevState;
    });
    // update topic
    changeTopic(topic);

    // update page
    changePage(page);

    // update completedTopics
    changeCompletedTopics(completedTopics);

    // update currentPageNode
    changeCurrentPageNode(currentPageNode);

    // update isEducateOpen
    changeIsEducateDescOpen(isEducateDescOpen === true ? true : undefined);
  };

  // declare an object to update cvDesign state
  const changeCvDesignObj = {
    all: (cvDesignObject) => {
      changeCvDesign(cvDesignObject);
    },
    font: (font) => {
      changeCvDesign((prevState) => {
        prevState.activeFont = font;
        return prevState;
      });
    },
    template: (template) => {
      changeCvDesign((prevState) => {
        prevState.activeTemplate = template;
        return prevState;
      });
    },
    fontSize: (size) => {
      changeCvDesign((prevState) => {
        prevState.fontSize = size;
        return prevState;
      });
    },
    headingSize: (size) => {
      changeCvDesign((prevState) => {
        prevState.headingSize = size;
        return prevState;
      });
    },
    sectionGap: (size) => {
      changeCvDesign((prevState) => {
        prevState.gap = size;
        return prevState;
      });
    },
    lineSpace: (size) => {
      changeCvDesign((prevState) => {
        prevState.lineSpace = size;
        return prevState;
      });
    },
    color: (col) => {
      changeCvDesign((prevState) => {
        prevState.color = col;
        return prevState;
      });
    },
    upDownMargin: (margin) => {
      changeCvDesign((prevState) => {
        prevState.upDownMargin = margin;
        return prevState;
      });
    },
    photoSize: (size) => {
      changeCvDesign((prevState) => {
        prevState.photoSize = size;
        return prevState;
      });
    },
  };
  // declare a function to change the state of Preview
  const changePreviewState = () => {
    changeIsPreviewVisible((prevState) => {
      return prevState ? false : true;
    });
  };
  return (
    <>
      <header>
        <ProgressBar
          topic={topic}
          completedTopics={completedTopics}
          currentPageNode={currentPageNode}
        />
      </header>
      <main>
        <MainPage
          changeState={stateHandler}
          data={data}
          page={page}
          topic={topic}
          completedTopics={completedTopics}
          currentPageNode={currentPageNode}
          navLink={navLink}
          isEducateDescOpen={isEducateDescOpen}
          cvDesign={cvDesign}
          changeCvDesign={changeCvDesignObj}
          isPreviewVisible={isPreviewVisible}
          changePreviewState={changePreviewState}
        />
      </main>
    </>
  );
};

// make a function to create the initial linkedList for the website's pages
const makeLinkedList = () => {
  const contactNode = node({ topic: "contact", page: "main" }, null, null);
  const navLink = linkedList(contactNode);
  navLink.append({ topic: "work", page: "intro" });
  navLink.append({ topic: "work", page: "main" });
  navLink.append({ topic: "work", page: "description" });
  navLink.append({ topic: "work", page: "summary" });
  navLink.append({ topic: "educate", page: "intro" });
  navLink.append({ topic: "educate", page: "main" });
  navLink.append({ topic: "educate", page: "summary" });
  navLink.append({ topic: "skills", page: "intro" });
  navLink.append({ topic: "skills", page: "description" });
  navLink.append({ topic: "summary", page: "intro" });
  navLink.append({ topic: "summary", page: "description" });
  navLink.append({ topic: "final", page: "main" });
  return { navLink };
};

// create all the necessary contexts
export const topicContext = createContext(null);
export const pageContext = createContext(null);
export const dataContext = createContext(null);
export const completedTopicsContext = createContext(null);
export const currentPageNode = createContext(null);
export const cvDesign = createContext(null);
export const changeStateContext = createContext(null);
export const navLinkContext = createContext(null);
export const changeCvDesignContext = createContext(null);
export const isPreviewVisible = createContext(null);
export const changePreviewState = createContext(null);

// initial cv design
const initialCvDesign = {
  templates: ["default"],
  activeTemplate: "default",
  templateColors: [
    "#3a3a3a",
    "#23a3e3",
    "#892343",
    "#e1a4d2",
    "#929496",
    "#b9481f",
    "#166c60",
    "#496267",
    "#102a73",
    "#4a4a4a",
  ],
  color: "#3a3a3a",
  secondColor: "#ffffff",
  fonts: [
    "Verdana",
    "Tahoma",
    "Arial",
    "Arial Black",
    "Trebuchet MS",
    "Impact",
    "Helvetica",
    "Courier",
    "Gill Sans",
    "Times New Roman",
    "Georgia",
    "Palatino",
    "Baskerville",
    "Andalé Mono",
    "Lucida",
    "Monaco",
    "Bradley Hand",
    "Brush Script MT",
    "Luminari",
    "Comic Sans MS",
  ],
  activeFont: "Verdana",
  fontSize: "0.8",
  headingSize: "1.4",
  gap: "1",
  lineSpace: "1",
  upDownMargin: "1",
  photoSize: "100",
};

export default App;
