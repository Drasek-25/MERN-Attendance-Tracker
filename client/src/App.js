import "./App.css";
import { Switch, Route } from "react-router";
import NavBar from "./components/NavBar";
import Login from "./views/Login";

function App() {
   return (
      <div className="App">
         <NavBar />

         <Switch>
            <Route exact path="/" render={() => <Login />} />
            {/* <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} /> */}
            <Route render={() => <h1>404</h1>} />
         </Switch>
      </div>
   );
}

export default App;
