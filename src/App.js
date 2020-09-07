import React, { useState } from "react";
import "./App.css";
import Start from "./component/Start/index";
import Game from "./component/Game/index";
import Select from "./component/Select/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";

function App() {
  const [memberCount, setMemberCount] = useState(0);

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Start setMemberCount={setMemberCount} />;
            }}
          />
          <Route
            path={"/game"}
            render={() => {
              return <Game memberCount={memberCount} />;
            }}
          />
          <Route
            path={"/select"}
            render={() => {
              return <Select />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
