import "./styles/body.scss";
import Navigation from "./views/Navigation";
import MusicPlayer from "./views/MusicPlayer";
import MainPage from "./views/MainPage";
import GetCateGory from "./views/category/GetCategory";
import "./styles/loading.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/category/:category" exact>
            <GetCateGory />
          </Route>
        </Switch>

        <MusicPlayer />
      </Router>
    </>
  );
}

export default App;
