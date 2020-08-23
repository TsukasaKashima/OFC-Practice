import React, { useState } from "react";
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
  const [memberCount, setMemberCount] = useState(0);
  const [existJoker, setExistJoker] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Start
                    setMemberCount={setMemberCount}
                    setExistJoker={setExistJoker}
                  />
                );
              }}
            />
            <Route
              path={"/game"}
              render={() => {
                return (
                  <Game
                    memberCount={memberCount}
                    existJoker={existJoker}
                    selectedCards={selectedCards}
                    setSelectedCards={setSelectedCards}
                  />
                );
              }}
            />
            <Route
              path={"/select"}
              render={() => {
                return (
                  <Select
                    existJoker={existJoker}
                    setExistJoker={setExistJoker}
                    selectedCards={selectedCards}
                    setSelectedCards={setSelectedCards}
                  />
                );
              }}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
