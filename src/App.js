
import React from "react";
import logo from "./logo.svg";
import PotluckView from "./views/PotluckView";
import CreatePotluck from "./views/CreatePotluck";
  import Form from './components/SignupForms'
import Login from "./components/Login"

function App() {
  return (
    <Switch>
      <Route path="/create">
        <CreatePotluck />
      </Route>
      <Route path="/">
        <PotluckView />
      </Route>
    </Switch>
  );
}
export default App

