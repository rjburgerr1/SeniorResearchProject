import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";

import SortDataByAge from "./pages/SortDataByAge";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/data/sort-by-age" exact component={SortDataByAge} />
      </Switch>
    </Router>
  );
}

export default App;
