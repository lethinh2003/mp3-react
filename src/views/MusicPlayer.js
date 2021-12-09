import "../styles/musicplayer.scss";
import MenuRight from "../views/MenuRight";
import FullView from "./FullView";
import { MdQueueMusic } from "react-icons/md";
import { useState, useEffect } from "react";
import Loading from "./Loading";
const MusicPlayer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isChooseMusic, setIsChooseMusic] = useState(false);
  const [isFullView, setIsFullView] = useState(false);
  const [fullView, setFullView] = useState();
  const [isOpenMenuRight, setIsOpenMenuRight] = useState(false);
  const [musicPlayer, setMusicPlayer] = useState();
  const [navDown, setNavDown] = useState();
  const [currentMusic, setCurrentMusic] = useState();
  const [musicInfo, setMusicInfo] = useState();
  const [navi, setNavi] = useState();
  const [menuRight, setMenuRight] = useState();

  ////Menu music
  const [audioPlay, setAudioPlay] = useState();
  const [timeRight, setTimeRight] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [iconRepeat, setIconRepeat] = useState();
  const [minutesCurrent, setMinutesCurrent] = useState(0);
  const [secondsCurrent, setSecondsCurrent] = useState(0);
  const [minutesDuration, setMinutesDuration] = useState(0);
  const [secondsDuration, setSecondsDuration] = useState(0);
  const [valueCurrent, setValueCurrent] = useState(0);
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const [isRepeatMusic, setIsRepeatMusi] = useState(false);

  ///

  useEffect(() => {
    const navi = document.querySelector(".navigation");
    const musicPlayer = document.querySelector(".music-player");
    const musicInfo = document.querySelector(".music-info");
    const navDown = document.querySelector(".turn-off_fullview");
    const menuRight = document.querySelector(".menu-right");
    const fullView = document.querySelector(".fullview");
    setFullView(fullView);
    setMenuRight(menuRight);
    setNavi(navi);
    setNavDown(navDown);
    setMusicPlayer(musicPlayer);
    setMusicInfo(musicInfo);
  }, []);

  if (musicPlayer && isChooseMusic === false && navi && menuRight) {
    musicPlayer.style = `transform: translateY(100%);`;
    navi.style.height = "100%";
    menuRight.style.height = "100%";
  } else if (musicPlayer && isChooseMusic === true && navi && menuRight) {
    musicPlayer.style = `transform: translateY(0);`;
    navi.style.height = "";
    menuRight.style.height = "";
  }
  const openFullScreenPlayer = () => {
    if (musicPlayer && navDown && isFullView === false && fullView) {
      musicPlayer.style = `transform: translateY(100%);`;

      fullView.style = `transform: translateY(0);`;

      setIsFullView(true);
    }
  };

  const handleOpenMenuRight = (e) => {
    e.stopPropagation();
    setIsOpenMenuRight(!isOpenMenuRight);
  };
  const handleCloseFullView = (data) => {
    if (musicPlayer && navDown && isFullView === true && fullView) {
      fullView.style = `transform: translateY(100%);`;
      musicPlayer.style = `transform: translateY(0);`;
      setIsFullView(data);
    }
  };

  const handleUpdateCurrentMusic = async (data) => {
    await new Promise((resolve) => {
      setIsLoading(true);

      setTimeout(resolve, 200);
    });

    setCurrentMusic(data);
    setIsChooseMusic(true);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <FullView
        currentMusic={currentMusic}
        handleCloseFullView={handleCloseFullView}
        audioPlay={audioPlay}
        timeRight={timeRight}
        timeLeft={timeLeft}
        iconRepeat={iconRepeat}
        minutesCurrent={minutesCurrent}
        secondsCurrent={secondsCurrent}
        minutesDuration={minutesDuration}
        secondsDuration={secondsDuration}
        valueCurrent={valueCurrent}
        isAudioPlay={isAudioPlay}
        isRepeatMusic={isRepeatMusic}
      />
      <div className="open-playlist" onClick={(e) => handleOpenMenuRight(e)}>
        <MdQueueMusic />
      </div>
      <div className="menu-bottom">
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
                    max="100"
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
                    <i className="fa fa-spinner fa-spin"></i>
                  </span>
                  <span className="subtitle">
                    <i className="fa fa-spinner fa-spin"></i>
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
      </div>

      <MenuRight
        isOpenMenuRight={isOpenMenuRight}
        handleUpdateCurrentMusic={handleUpdateCurrentMusic}
      />
    </>
  );
};
export default MusicPlayer;
