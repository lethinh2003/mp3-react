import "../styles/fullview.scss";
import { useState, useEffect } from "react";
import { BiVolumeFull, BiVolumeLow, BiVolumeMute } from "react-icons/bi";
import { TiChartBar } from "react-icons/ti";
import iconPlaying from "./images/playing.gif";
import NewMusic from "./NewMusic";
const FullView = (props) => {
  const newStore = {
    repeatMusic: true,
  };
  localStorage.setItem("repeatMusic", JSON.stringify(newStore));
  const getStore = JSON.parse(localStorage.getItem("repeatMusic")).repeatMusic;
  let {
    handleSetCurrentMusic,
    currentMusic,
    handleCloseFullView,
    handleUpdateStatusAudio,
    listCurrentMusic,
  } = props;

  const [nextMusic, setNextMusic] = useState();
  const [previousMusic, setPreviousMusic] = useState();
  const [audioPlay, setAudioPlay] = useState();
  const [timeRight, setTimeRight] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [iconRepeat, setIconRepeat] = useState();
  const [iconAutoNext, setIconAutoNext] = useState();
  const [minutesCurrent, setMinutesCurrent] = useState(0);
  const [secondsCurrent, setSecondsCurrent] = useState(0);
  const [minutesDuration, setMinutesDuration] = useState(0);
  const [secondsDuration, setSecondsDuration] = useState(0);
  const [valueCurrent, setValueCurrent] = useState(0);
  const [musicVolume, setMusicVolume] = useState(1);
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const [isRepeatMusic, setIsRepeatMusic] = useState(false);
  const [isAutoNext, setIsAutoNext] = useState(false);

  useEffect(() => {
    if (currentMusic) {
      document.title = currentMusic.name;
      const audioPlay = document.querySelector("audio");
      const timeRight = document.querySelector(".time-right");
      const timeLeft = document.querySelector(".time-left");
      const iconRepeat = document.querySelector(".fa-repeat");
      const iconAutoNext = document.querySelector(".fa-random");
      setIconAutoNext(iconAutoNext);
      setIconRepeat(iconRepeat);
      setTimeLeft(timeLeft);
      setTimeRight(timeRight);
      setAudioPlay(audioPlay);
      setIsAudioPlay(true);

      const audioPromise = audioPlay.play();
      if (audioPromise !== undefined) {
        audioPromise
          .then((_) => {
            audioPlay.play();
            handleUpdateStatusAudio(true);
          })
          .catch((error) => {});
      }
    }
  }, [currentMusic]);
  useEffect(() => {
    if (currentMusic) {
      if (listCurrentMusic) {
        let getNextMusic = [...listCurrentMusic].filter((item) => {
          if (currentMusic.id === listCurrentMusic.length) {
            return item.id === 1;
          } else {
            return item.id === currentMusic.id + 1;
          }
        });
        let getPreviousMusic = [...listCurrentMusic].filter((item) => {
          if (currentMusic.id === 1) {
            return item.id === listCurrentMusic.length;
          } else {
            return item.id === currentMusic.id - 1;
          }
        });
        getNextMusic.map((item) => {
          setNextMusic(item);
        });
        getPreviousMusic.map((item) => {
          setPreviousMusic(item);
        });
      }
    }
  }, [currentMusic]);

  useEffect(() => {
    const updateTime = () => {
      if (audioPlay) {
        let getMinutes = Math.floor(audioPlay.duration / 60);
        let getSeconds = Math.floor(audioPlay.duration - getMinutes * 60);
        if (getSeconds < 10) {
          getSeconds = "0" + getSeconds;
        } else {
          getSeconds = getSeconds;
        }
        let getMinutesCurrent = Math.floor(audioPlay.currentTime / 60);
        let getSecondsCurrent = Math.floor(
          audioPlay.currentTime - getMinutesCurrent * 60
        );
        if (getSecondsCurrent < 10) {
          getSecondsCurrent = "0" + getSecondsCurrent;
        } else {
          getSecondsCurrent = getSecondsCurrent;
        }
        const valueCurrent = Math.floor(
          (audioPlay.currentTime / audioPlay.duration) * 100
        );

        setMinutesCurrent(getMinutesCurrent);
        setSecondsCurrent(getSecondsCurrent);
        setMinutesDuration(getMinutes);
        setSecondsDuration(getSeconds);
        setValueCurrent(valueCurrent);
      }
    };
    if (audioPlay && isRepeatMusic === true && valueCurrent) {
      if (valueCurrent >= 100) {
        const solveProblemRepeat = new Promise((resolve, reject) => {
          audioPlay.pause();

          resolve();
        })
          .then(() => {
            audioPlay.play();
          })
          .then(() => {
            audioPlay.currentTime = 0;
          });
      }
    } else if (audioPlay && isRepeatMusic === false && valueCurrent) {
      if (valueCurrent >= 100) {
        audioPlay.pause();
        audioPlay.currentTime = 0;

        setIsAudioPlay(false);
        handleUpdateStatusAudio(false);
      }
    }
    const updateRealTime = setInterval(updateTime, 100);

    return () => {
      clearInterval(updateRealTime);
    };
  });

  const handleChangeValue = (e) => {
    const changeValue = (audioPlay.duration / 100) * e.target.value;
    setValueCurrent(e.target.value);
    audioPlay.currentTime = changeValue;
  };
  const handleChangeRepeatMusic = () => {
    if (iconRepeat && isRepeatMusic === true) {
      iconRepeat.style = "";
    } else if (iconRepeat && isRepeatMusic === false) {
      iconRepeat.style = "color: #b55fe2;";
    }
    setIsRepeatMusic(!isRepeatMusic);
  };

  const handleClickCloseFullView = () => {
    handleCloseFullView(false);
  };
  const handleOnOffMusic = () => {
    if (currentMusic && audioPlay) {
      if (isAudioPlay) {
        setIsAudioPlay(false);
        handleUpdateStatusAudio(false);
        audioPlay.pause();
      } else {
        setIsAudioPlay(true);
        handleUpdateStatusAudio(true);
        audioPlay.play();
      }
    }
  };
  const handleChangeVolume = (e) => {
    if (audioPlay) {
      setMusicVolume(e.target.value);
      audioPlay.volume = e.target.value;
    }
  };
  const handleClickPrevious = () => {
    handleSetCurrentMusic(previousMusic);
  };
  const handleClickNext = () => {
    handleSetCurrentMusic(nextMusic);
  };
  const handleAutoNext = () => {
    if (iconAutoNext) {
      if (isAutoNext === false) {
        iconAutoNext.style.color = `rgb(181, 95, 226)`;
      } else if (isAutoNext === true) {
        iconAutoNext.style.color = ``;
      }

      setIsAutoNext(!isAutoNext);
    }
  };

  return (
    <>
      <div className="fullview">
        <div
          className="turn-off_fullview"
          onClick={() => handleClickCloseFullView()}
        >
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>

        {typeof currentMusic === "object" && (
          <>
            <audio id="audio" src={currentMusic.link}></audio>
            <div className="list_music_current">
              {typeof previousMusic === "object" && (
                <div className="info-current_music previous">
                  <div className="thumbnail-current">
                    <div className="item-thumbnail_hover"></div>
                    <div
                      className="item-play_icon"
                      style={{ width: "100px", height: "100px" }}
                      onClick={() => handleClickPrevious()}
                    >
                      <i className="fa fa-play big-icon" aria-hidden="true"></i>
                    </div>
                    <img src={previousMusic.image} />
                  </div>
                  <div className="desc-current">
                    <span className="music_name">{previousMusic.name}</span>
                    <span className="music_author">{previousMusic.author}</span>
                  </div>
                </div>
              )}
              <div className="info-current_music">
                <div className="thumbnail-current">
                  <div className="item-thumbnail_hover"></div>
                  {isAudioPlay === true && (
                    <div className="item-playing_icon">
                      <img src={iconPlaying} />
                    </div>
                  )}
                  <div
                    className="item-play_icon"
                    style={{ width: "100px", height: "100px" }}
                    onClick={() => handleOnOffMusic()}
                  >
                    {isAudioPlay === false && (
                      <i className="fa fa-play big-icon" aria-hidden="true"></i>
                    )}
                    {isAudioPlay === true && (
                      <i
                        className="fa fa-pause big-icon"
                        aria-hidden="true"
                      ></i>
                    )}
                  </div>
                  <img src={currentMusic.image} />
                </div>

                <div className="desc-current">
                  <span className="music_name">{currentMusic.name}</span>
                  <span className="music_author">{currentMusic.author}</span>
                </div>
              </div>
              {typeof nextMusic === "object" && (
                <div className="info-current_music next">
                  <div className="thumbnail-current">
                    <div className="item-thumbnail_hover"></div>
                    <div
                      className="item-play_icon"
                      style={{ width: "100px", height: "100px" }}
                      onClick={() => handleClickNext()}
                    >
                      <i className="fa fa-play big-icon" aria-hidden="true"></i>
                    </div>
                    <img src={nextMusic.image} />
                  </div>
                  <div className="desc-current">
                    <span className="music_name">{nextMusic.name}</span>
                    <span className="music_author">{nextMusic.author}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="music-player">
              <div className="music-playing">
                <div className="music-controler">
                  <div className="volume-icon">
                    {musicVolume >= 1 ? (
                      <BiVolumeFull />
                    ) : musicVolume > 0 && musicVolume < 1 ? (
                      <BiVolumeLow />
                    ) : (
                      <BiVolumeMute />
                    )}
                  </div>
                  <input
                    onChange={(e) => handleChangeVolume(e)}
                    type="range"
                    id="volumn"
                    min="0"
                    max="1"
                    step="0.1"
                    value={musicVolume}
                  ></input>
                </div>
                <div className="playbar-bottom">
                  <span className="time-left">
                    {minutesCurrent}:{secondsCurrent}
                  </span>
                  <input
                    onChange={(e) => handleChangeValue(e)}
                    type="range"
                    className="range"
                    name="vol"
                    value={valueCurrent}
                    min="0"
                    max="100"
                  />

                  {minutesDuration && secondsDuration && (
                    <span className="time-right">
                      {minutesDuration}:{secondsDuration}
                    </span>
                  )}
                </div>
                <div className="playbar-top">
                  <i
                    className="fa fa-random"
                    aria-hidden="true"
                    onClick={() => handleAutoNext()}
                  ></i>
                  <i
                    className="fa fa-step-backward"
                    aria-hidden="true"
                    onClick={() => handleClickPrevious()}
                  ></i>
                  {isAudioPlay === false && (
                    <i
                      className="fa play-icon fa-play-circle-o"
                      onClick={() => handleOnOffMusic()}
                      style={{ fontSize: "40px" }}
                      aria-hidden="true"
                    ></i>
                  )}
                  {isAudioPlay === true && (
                    <i
                      className="fa play-icon fa-pause-circle-o"
                      onClick={() => handleOnOffMusic()}
                      style={{
                        fontSize: "40px",
                        color: " rgb(181, 95, 226)",
                      }}
                      aria-hidden="true"
                    ></i>
                  )}
                  <i
                    className="fa fa-step-forward"
                    aria-hidden="true"
                    onClick={() => handleClickNext()}
                  ></i>
                  <i
                    className="fa fa-repeat"
                    onClick={() => handleChangeRepeatMusic()}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default FullView;
