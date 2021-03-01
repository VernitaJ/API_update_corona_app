import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import HomeLayout from "./layout/HomeLayout";
import Country from "./Components/Country";
import CountryView from "./views/CountryView";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomeLayout} />
        <Route path="/country/:country" render={Country} />
      </Router>
    </div>
  );
}
