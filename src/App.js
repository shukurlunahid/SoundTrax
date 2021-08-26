import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import DashboardPageComponent from "./components/Dashboard";
import HeaderComponent from "./components/Header";
import ArtistDetailsComponent from "./components/Dashboard/ArtistDetails";

import "./App.scss";
import SearchComponent from "./components/Dashboard/Search";


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path="/" exact component={DashboardPageComponent} />
          <Route path="/artist/:artistName" exact component={ArtistDetailsComponent} />
          <Route path="/search" exact component={SearchComponent} />
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
