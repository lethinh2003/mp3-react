import "./styles/body.scss";
import Navigation from "./views/Navigation";
import MusicPlayer from "./views/MusicPlayer";
import MainPage from "./views/MainPage";
import Music from "./api/Music";
import "./styles/loading.scss";

function App() {
  return (
    <>
      <Navigation />
      <MainPage />
      <MusicPlayer />
      <Music />
    </>
  );
}

export default App;
