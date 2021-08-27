import { createBrowserHistory } from "history";
import {Router, Switch, Route, HashRouter} from "react-router-dom"
import Example from "./components/DeviceCheck";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

var hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <HashRouter history={hist}>
          <Route path="/me" component={HomePage}/>
          <Route path="/" component={Example}/>
      </HashRouter>
    </div>
  );
}

export default App;
