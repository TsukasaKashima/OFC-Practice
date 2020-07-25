import React from "react";
import "./App.css";
import Start from "./component/Start";
import Game from "./component/Game";
import Select from "./component/Select";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path={"/game"} component={Game} />
          <Route path={"/select"} component={Select} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
