import React from "react";
import logo from "./logo.svg";
import PotluckView from "./views/PotluckView";
import CreatePotluck from "./views/CreatePotluck";
import Form from "./components/SignupForms";
import Login from "./components/Login";
import Test from "./components/TestComponent";
import { Route, Switch } from "react-router";
import PrivateRoute from "./utilities/PrivateRoute";
import UserProfile from "./views/UserProfile";
import Potlucks from "./views/MyPotlucks";
import EditPotluck from "./views/EditPotluck";
import SignUpForms from "./components/SignupForms";

function App() {
  return (
    <Switch>
      <PrivateRoute path="/editpotluck/:id" component={EditPotluck} />
      <PrivateRoute path="/mypotlucks" component={Potlucks} />
      <PrivateRoute path="/view/:id" component={PotluckView} />
      <PrivateRoute path="/dashboard" component={UserProfile} />
      <Route path="/:id/test">
        <Test />
      </Route>
      <PrivateRoute exact path="/create/" component={CreatePotluck} />
      <Route path="/">
        <SignUpForms />
      </Route>
    </Switch>
  );
}

export default App;
