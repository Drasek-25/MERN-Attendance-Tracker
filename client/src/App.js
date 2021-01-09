import "./App.css";
import { Switch, Route } from "react-router";
import NavBar from "./components/NavBar";
import Login from "./views/Login";
import { useState } from "react";
import Classes from "./views/Classes";

function App() {
   return (
      <div className="App">
         <NavBar />

         <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/classes" component={() => <Classes />} />
            <Route render={() => <h1>404</h1>} />
         </Switch>
      </div>
   );
}

export default App;
