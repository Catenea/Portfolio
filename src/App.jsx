import { createBrowserHistory } from "history";
import {Router, Switch, Route, HashRouter} from "react-router-dom"
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

var hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <HashRouter history={hist}>
          <Route path="/" component={HomePage}/>
      </HashRouter>
    </div>
  );
}

export default App;
