import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      {/* <h1>Hi Yaji lets learn React js</h1> */}
      <Router>
      <Header />
        <Switch>

          <Route path="/search/:searchTerm">
          <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* RecommendedVideos */}
              <SearchPage />
            </div>
          </Route>

          <Route path="/">

            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* RecommendedVideos */}
              <RecommendedVideos />
            </div>

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
