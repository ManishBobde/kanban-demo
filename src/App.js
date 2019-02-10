import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TabComponent from "./components/Tabs/TabComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabComponent />
      </div>
    );
  }
}

export default App;
