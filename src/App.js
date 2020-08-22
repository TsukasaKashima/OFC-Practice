import React from "react";
import "./App.css";
import Start from "./component/Start";
import Game from "./component/Game";
import Select from "./component/Select";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

let store = createStore(reducers);

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path={"/game"} component={Game} />
            <Route path={"/select"} component={Select} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
