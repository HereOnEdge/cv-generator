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
    };

    this.stateHandler = this.stateHandler.bind(this);
  }

  stateHandler({ data, topic, page }) {
    this.setState({
      data: data,
      topic: topic,
      page: page,
    });
  }

  render() {
    return (
      <div>
        <header>
          <ProgressBar topic={this.state.topic} />
        </header>
        <main>
          <MainPage
            changeState={this.stateHandler}
            data={this.state.data}
            page={this.state.page}
            topic={this.state.topic}
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
