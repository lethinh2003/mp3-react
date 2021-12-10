import "../styles/fullview.scss";
import { useState, useEffect } from "react";
import { BiVolumeFull, BiVolumeLow, BiVolumeMute } from "react-icons/bi";
const FullView = (props) => {
  const PlayList = [
    {
      id: 1,
      name: "Call Of Silence",
      image: "https://i.imgur.com/0HSZKLu.jpg",
      link: "http://upfile.vn/download/guest/_~XtNkBmNqFg/HxBmFTjmAVXi/qWWrtC8L9xKS/rxdHKC8YFZKy/a1444d801d58aa53b/1639038871/2cbd98ef19c4fc2ab522fe450008074a478032cc22cba9ebe/CallOfSilence.mp3",
      author: "Hiroyuki Sawano; Gemie",
      category: "JP",
    },
    {
      id: 2,
      name: "Nandemonaiya",
      image: "https://i.imgur.com/uJxbqaC.jpg",
      link: "http://upfile.vn/download/guest/~mjCuVXtAVX-/hyBmFTjmAVBg/RHWHFC8c0B7w/dxS0OcOoGBzk/294c14611ea5bfafb/1639038948/6c84ee6f827c1b1b5b2a83f82a75657543ed8e928dcabb62d/Nandemonaiya.mp3",
      author: "Kamishiraishi Mone",
      category: "JP",
    },
    {
      id: 3,
      name: "Uchiage Hanabi",
      image: "https://i.imgur.com/98jj7w2.jpg",
      link: "http://upfile.vn/download/guest/7~XtNkBmNQT3/JsLCFQBtFrBC/WDWS5CNw8HKy/BCSBgucU1ce0/cd8f2205315935f36/1639038981/066f6b1886a071dae1ba32f6759f28ab06315178c55fea7e3/UchiageHanabi.mp3",
      author: "Kenshi Yonezu",
      category: "JP",
    },
    {
      id: 4,
      name: "Hazakura",
      image: "https://i.imgur.com/3B2eBcK.jpg",
      link: "http://upfile.vn/download/guest/A~XtNkBmNQI3/2UrCFQBtFrBC/w_ec1CNsEDFk/MhO1KCrLXhSr/78ffa547ab7305497/1639039012/736eab1164fbaa5f0c1c9155e89d5ec4785fa3d3ad9ea0a22/Hazakura.mp3",
      author: "Kie Kitano",
      category: "JP",
    },
    {
      id: 5,
      name: "Orange",
      image: "https://i.imgur.com/WdlbOlN.jpg",
      link: "http://upfile.vn/download/guest/6MWm_kBCurBC/rwjmFTjmAVZb/ByFKRQ7orWOL/bDZoPcGsC_ZB/a03e9e7651621c01c/1639039042/af36e03763c64dc50022fc7b049f810ced49e3ee8f9d5039c/Orange7.mp3",
      author: "7!!",
      category: "JP",
    },
  ];
  const { currentMusic, handleCloseFullView, handleUpdateStatusAudio } = props;

  const [audioPlay, setAudioPlay] = useState();
  const [timeRight, setTimeRight] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [iconRepeat, setIconRepeat] = useState();
  const [minutesCurrent, setMinutesCurrent] = useState(0);
  const [secondsCurrent, setSecondsCurrent] = useState(0);
  const [minutesDuration, setMinutesDuration] = useState(0);
  const [secondsDuration, setSecondsDuration] = useState(0);
  const [valueCurrent, setValueCurrent] = useState(0);
  const [deg, setDeg] = useState(0);
  const [musicVolume, setMusicVolume] = useState(1);
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const [isRepeatMusic, setIsRepeatMusi] = useState(false);

  useEffect(() => {
    if (currentMusic) {
      const audioPlay = document.querySelector("audio");
      const timeRight = document.querySelector(".time-right");
      const timeLeft = document.querySelector(".time-left");
      const iconRepeat = document.querySelector(".fa-repeat");
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
  if (audioPlay && isRepeatMusic && valueCurrent) {
    if (valueCurrent >= 100) {
      audioPlay.currentTime = 0;
    }
  } else if (audioPlay && !isRepeatMusic && valueCurrent) {
    if (valueCurrent >= 100) {
      audioPlay.currentTime = 0;
      audioPlay.pause();
      handleUpdateStatusAudio(false);
    }
  }

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
  const handleChangeValue = (e) => {
    const changeValue = (audioPlay.duration / 100) * e.target.value;
    setValueCurrent(e.target.value);
    audioPlay.currentTime = changeValue;
  };
  const handleChangeRepeatMusic = () => {
    if (iconRepeat && isRepeatMusic) {
      iconRepeat.style = "";
    } else if (iconRepeat && !isRepeatMusic) {
      iconRepeat.style = "color: #b55fe2;";
    }
    setIsRepeatMusi(!isRepeatMusic);
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
        handleUpdateStatusAudio(false);
      } else {
        setIsAudioPlay(true);
        handleUpdateStatusAudio(true);
        audioPlay.play();
      }
    }
  };
  const handleChangeVolume = (e) => {
    const volumnIcon = document.querySelector(".volumn-icon");
    const volumeFull = <BiVolumeFull />;
    const volumeLow = <BiVolumeLow />;
    const volumeMute = BiVolumeMute;
    if (audioPlay) {
      setMusicVolume(e.target.value);
      audioPlay.volume = e.target.value;
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
                <div className="music-controler">
                  <div className="volumn-icon">
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
                      style={{ fontSize: "40px", color: " rgb(181, 95, 226)" }}
                      aria-hidden="true"
                    ></i>
                  )}
                  <i className="fa fa-step-forward" aria-hidden="true"></i>
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
