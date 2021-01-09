import "./App.css";
import { Switch, Route } from "react-router";
import NavBar from "./components/NavBar";
import Login from "./views/Login";
import { useState } from "react";

function App() {
   const [userId, setUserId] = useState();
   return (
      <div className="App">
         <NavBar />

         <Switch>
            <Route
               exact
               path="/"
               render={() => <Login setUserId={setUserId} />}
            />
            {/* <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} /> */}
            <Route render={() => <h1>404</h1>} />
         </Switch>
      </div>
   );
}

export default App;
