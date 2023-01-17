import React from "react";
import "./App.css";
import MainPage from "./Components/MainPage";
import ProgressBar from "./Components/ProgressBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topic: "contact",
      page: "main",
      data: {},
      completedTopics: [],
    };

    this.stateHandler = this.stateHandler.bind(this);
  }

  stateHandler({ data, topic, page, completedTopics }) {
    this.setState({
      data: data,
      topic: topic,
      page: page,
      completedTopics: completedTopics,
    });
  }

  render() {
    return (
      <div>
        <header>
          <ProgressBar
            topic={this.state.topic}
            completedTopics={this.state.completedTopics}
          />
        </header>
        <main>
          <MainPage
            changeState={this.stateHandler}
            data={this.state.data}
            page={this.state.page}
            topic={this.state.topic}
            completedTopics={this.state.completedTopics}
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
