import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import HomeLayout from "./layout/HomeLayout";
import Country from "./Components/Country";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomeLayout} />
        <Route exact path="/country/:country" render={Country} />
      </Router>
    </div>
  );
}
