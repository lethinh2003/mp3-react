import "../styles/musicplayer.scss";
import MenuRight from "../views/MenuRight";

import { useState, useEffect } from "react";
const MusicPlayer = () => {
  const [isChooseMusic, setIsChooseMusic] = useState(true);
  const [isFullView, setIsFullView] = useState(false);
  const [isOpenMenuRight, setIsOpenMenuRight] = useState(false);
  const [musicPlayer, setMusicPlayer] = useState();
  const [navDown, setNavDown] = useState();
  const [currentMusic, setCurrentMusic] = useState();
  const [musicInfo, setMusicInfo] = useState();
  useEffect(() => {
    const musicPlayer = document.querySelector(".music-player");
    const musicInfo = document.querySelector(".music-info");
    const navDown = document.querySelector(".nav-down");
    setNavDown(navDown);
    setMusicPlayer(musicPlayer);
    setMusicInfo(musicInfo);
  }, []);
  if (musicPlayer && isChooseMusic === false) {
    musicPlayer.style = `transform: translateY(100%);`;
  } else if (musicPlayer && isChooseMusic === true) {
    musicPlayer.style = `transform: translateY(0);`;
  }
  const openFullScreenPlayer = async () => {
    if (musicPlayer && navDown && isFullView === false) {
      musicPlayer.style = await `transform: translateY(100%);`;
      setTimeout(async function () {
        musicPlayer.style = "";

        musicPlayer.style = `height: 100%; top: 0;background-image: linear-gradient(to right, #432275, rgba(41, 21, 71, 0.8));`;
      }, 200);
      navDown.style = `opacity: 1; visibility: visible;`;
      setIsFullView(true);
    } else if (musicPlayer && navDown && isFullView === true) {
      document.addEventListener("click", function (e) {
        if (e.target === navDown || e.target == navDown.firstElementChild) {
          musicPlayer.style = "";
          navDown.style = "";

          setIsFullView(false);
        }
      });
    }
  };
  const handleOpenMenuRight = (e) => {
    e.stopPropagation();
    setIsOpenMenuRight(!isOpenMenuRight);
  };
  const handleUpdateCurrentMusic = (data) => {
    if (data) {
      setCurrentMusic(data);
      setIsChooseMusic(true);
    }
  };

  return (
    <>
      <div className="music-player" onClick={() => openFullScreenPlayer()}>
        <div className="nav-down">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
        {currentMusic && (
          <>
            <div className="music-info">
              <div className="cd">
                <img src={currentMusic.image} alt="" />
              </div>
              <div className="music-name">
                <span className="name">{currentMusic.name}</span>
                <span className="subtitle">{currentMusic.author}</span>
              </div>
              <div className="music-icon">
                <i className="fa fa-heart"></i>
                <i className="fa fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="music-playing">
              <div className="playbar-top">
                <i className="fa fa-random" aria-hidden="true"></i>
                <i className="fa fa-step-backward" aria-hidden="true"></i>
                <i
                  className="fa play-icon fa-play-circle-o"
                  style={{ fontSize: "40px" }}
                  aria-hidden="true"
                ></i>
                <i className="fa fa-step-forward" aria-hidden="true"></i>
                <i className="fa fa-repeat" aria-hidden="true"></i>
              </div>
              <div className="playbar-bottom">
                <span className="time-left">00:00</span>
                <input
                  type="range"
                  className="range"
                  name="vol"
                  min="0"
                  max="50"
                />
                <span className="time-right">00:00</span>
              </div>
            </div>
            <div className="music-controler">
              <i className="fa fa-volume-up" aria-hidden="true"></i>

              <i
                className="fa fa-list-ul"
                aria-hidden="true"
                onClick={(e) => handleOpenMenuRight(e)}
              ></i>
            </div>
          </>
        )}
        {!currentMusic && (
          <>
            <div
              className="music-info"
              style={{ opacity: "0", visibility: "hidden" }}
            >
              <div className="cd"></div>
              <div className="music-name">
                <span className="name">
                  <i class="fa fa-spinner fa-spin"></i>
                </span>
                <span className="subtitle">
                  <i class="fa fa-spinner fa-spin"></i>
                </span>
              </div>
              <div className="music-icon">
                <i className="fa fa-heart"></i>
                <i className="fa fa-ellipsis-h"></i>
              </div>
            </div>
            <div
              className="music-playing"
              style={{ opacity: "0", visibility: "hidden" }}
            >
              <div className="playbar-top">
                <i className="fa fa-random" aria-hidden="true"></i>
                <i className="fa fa-step-backward" aria-hidden="true"></i>
                <i
                  className="fa play-icon fa-play-circle-o"
                  style={{ fontSize: "40px" }}
                  aria-hidden="true"
                ></i>
                <i className="fa fa-step-forward" aria-hidden="true"></i>
                <i className="fa fa-repeat" aria-hidden="true"></i>
              </div>
              <div className="playbar-bottom">
                <span className="time-left">00:00</span>
                <input
                  type="range"
                  className="range"
                  name="vol"
                  min="0"
                  max="50"
                />
                <span className="time-right">00:00</span>
              </div>
            </div>
            <div className="music-controler">
              <i
                className="fa fa-volume-up"
                aria-hidden="true"
                style={{ opacity: "0", visibility: "hidden" }}
              ></i>

              <i
                className="fa fa-list-ul"
                aria-hidden="true"
                onClick={(e) => handleOpenMenuRight(e)}
              ></i>
            </div>
          </>
        )}
      </div>

      <MenuRight
        isOpenMenuRight={isOpenMenuRight}
        handleUpdateCurrentMusic={handleUpdateCurrentMusic}
      />
    </>
  );
};
export default MusicPlayer;
