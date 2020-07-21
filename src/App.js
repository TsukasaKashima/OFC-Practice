import React from "react";
import "./App.css";
import Start from "./component/Start";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
