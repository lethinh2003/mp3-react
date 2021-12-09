import "../styles/fullview.scss";
import { useState, useEffect } from "react";
const FullView = (props) => {
  const { currentMusic, handleCloseFullView } = props;
  const [audioPlay, setAudioPlay] = useState();
  const [timeRight, setTimeRight] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [minutesCurrent, setMinutesCurrent] = useState(0);
  const [secondsCurrent, setSecondsCurrent] = useState(0);
  const [minutesDuration, setMinutesDuration] = useState(0);
  const [secondsDuration, setSecondsDuration] = useState(0);
  const [valueCurrent, setValueCurrent] = useState(0);
  const [isAudioPlay, setIsAudioPlay] = useState(false);

  useEffect(() => {
    if (currentMusic) {
      const audioPlay = document.querySelector("audio");
      const timeRight = document.querySelector(".time-right");
      const timeLeft = document.querySelector(".time-left");
      setTimeLeft(timeLeft);
      setTimeRight(timeRight);
      setAudioPlay(audioPlay);
      setIsAudioPlay(true);

      const audioPromise = audioPlay.play();
      if (audioPromise !== undefined) {
        audioPromise
          .then((_) => {
            audioPlay.play();
          })
          .catch((error) => {});
      }
    }
  }, [currentMusic]);

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
  const updateRealTime = setInterval(updateTime, 1000);
  const handleClickCloseFullView = () => {
    handleCloseFullView(false);
  };
  const handleOnMusic = () => {
    if (currentMusic && audioPlay) {
      if (isAudioPlay) {
        setIsAudioPlay(false);
        audioPlay.pause();
      } else {
        setIsAudioPlay(true);
        audioPlay.play();
      }
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

        {currentMusic && (
          <>
            <audio id="audio" src={currentMusic.link}></audio>
            <div className="info-current_music">
              <div className="thumbnail-current">
                <img src={currentMusic.image} />
              </div>
              <div className="desc-current">
                <span className="music_name">{currentMusic.name}</span>
                <span className="music_author">{currentMusic.author}</span>
              </div>
            </div>
            <div className="music-player">
              <div className="music-playing">
                <div className="playbar-bottom">
                  <span className="time-left">
                    {minutesCurrent}:{secondsCurrent}
                  </span>
                  <input
                    type="range"
                    className="range"
                    name="vol"
                    value={valueCurrent}
                    min="0"
                    max="100"
                  />
                  <span className="time-right">
                    {" "}
                    {minutesDuration}:{secondsDuration}
                  </span>
                </div>
                <div className="playbar-top">
                  <i className="fa fa-random" aria-hidden="true"></i>
                  <i className="fa fa-step-backward" aria-hidden="true"></i>
                  {isAudioPlay === false && (
                    <i
                      className="fa play-icon fa-play-circle-o"
                      onClick={() => handleOnMusic()}
                      style={{ fontSize: "40px" }}
                      aria-hidden="true"
                    ></i>
                  )}
                  {isAudioPlay === true && (
                    <i
                      className="fa play-icon fa-pause-circle-o"
                      onClick={() => handleOnMusic()}
                      style={{ fontSize: "40px" }}
                      aria-hidden="true"
                    ></i>
                  )}
                  <i className="fa fa-step-forward" aria-hidden="true"></i>
                  <i className="fa fa-repeat" aria-hidden="true"></i>
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
