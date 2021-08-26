import { createBrowserHistory } from "history";
import {Router, Switch, Route} from "react-router-dom"
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

var hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={hist}>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/" component={HomePage}/>
          <Route path="/projects" component={ProjectsPage}/>
      </Router>
    </div>
  );
}

export default App;
