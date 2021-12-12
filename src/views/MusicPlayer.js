import "../styles/musicplayer.scss";
import MenuRight from "../views/MenuRight";
import FullView from "./FullView";
import { MdQueueMusic } from "react-icons/md";
import APIMusic from "../api/APIMusic";
import { useState, useEffect } from "react";
const MusicPlayer = () => {
  const { data: dataListMusic, isLoading } = APIMusic("getMusicList", 2000);
  const [isChooseMusic, setIsChooseMusic] = useState(false);
  const [isFullView, setIsFullView] = useState(false);
  const [fullView, setFullView] = useState();
  const [isOpenMenuRight, setIsOpenMenuRight] = useState(false);
  const [musicPlayer, setMusicPlayer] = useState();
  const [navDown, setNavDown] = useState();
  const [currentMusic, setCurrentMusic] = useState();
  const [previousMusic, setPreviousMusic] = useState();
  const [nextMusic, setNextMusic] = useState();
  const [musicInfo, setMusicInfo] = useState();
  const [navi, setNavi] = useState();
  const [menuRight, setMenuRight] = useState();
  const [cd, setCd] = useState();
  const [deg, setDeg] = useState(0);

  const [isAudioPlay, setIsAudioPlay] = useState(false);

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
  useEffect(() => {
    const cd = document.querySelector(".cd");
    setCd(cd);
    if (cd) {
      if (isAudioPlay === true) {
        cd.classList.add("rotage");
      } else {
        cd.classList.remove("rotage");
      }
    }
    if (currentMusic) {
      const getStore = JSON.parse(localStorage.getItem(currentMusic.id));
      if (getStore === null) {
        const newStore = {
          heart: 0,
        };
        localStorage.setItem(currentMusic.id, JSON.stringify(newStore));
      }
    }
    if (musicPlayer && isChooseMusic === false && navi && menuRight) {
      musicPlayer.style = `transform: translateY(100%);`;
      navi.style.height = "100%";
      menuRight.style.height = "100%";
    } else if (musicPlayer && isChooseMusic === true && navi && menuRight) {
      musicPlayer.style = ` transform: translateY(0);`;
      navi.style.height = "";
      menuRight.style.height = "";
    }
  });
  const openFullScreenPlayer = () => {
    if (musicPlayer && navDown && isFullView === false && fullView) {
      musicPlayer.style = ` transform: translateY(100%);`;

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

  const handleUpdateCurrentMusic = (data) => {
    setCurrentMusic(data);
    setIsChooseMusic(true);
  };

  const handleUpdatePreviousMusic = (data) => {
    setPreviousMusic(data);
  };
  const handleUpdateNextMusic = (data) => {
    setNextMusic(data);
  };
  const handleUpdateStatusAudio = (data) => {
    setIsAudioPlay(data);
  };
  const handleClickHeart = (e) => {
    e.stopPropagation();
    if (currentMusic) {
      const heart = document.querySelector(".fa-heart");
      let getStore = JSON.parse(localStorage.getItem(currentMusic.id));
      if (heart && getStore) {
        heart.classList.add("clicked");
        const countHeart = getStore.heart + 1;
        const newStore = {
          heart: countHeart,
        };
        localStorage.setItem(currentMusic.id, JSON.stringify(newStore));
      }
    }
  };
  useEffect(() => {
    if (currentMusic) {
      const heart = document.querySelector(".fa-heart");
      let getStore = JSON.parse(localStorage.getItem(currentMusic.id));
      if (heart) {
        if (getStore.heart > 0) {
          heart.classList.add("clicked");
        } else {
          heart.classList.remove("clicked");
        }
      }
    }
  });

  return (
    <>
      <FullView
        currentMusic={currentMusic}
        handleCloseFullView={handleCloseFullView}
        handleUpdateStatusAudio={handleUpdateStatusAudio}
        listCurrentMusic={dataListMusic}
        handleSetCurrentMusic={handleUpdateCurrentMusic}
      />
      <div className="open-playlist" onClick={(e) => handleOpenMenuRight(e)}>
        <MdQueueMusic />
      </div>
      <div className="menu-bottom">
        <div className="music-player" onClick={() => openFullScreenPlayer()}>
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
                  <i
                    className="fa fa-heart"
                    onClick={(e) => handleClickHeart(e)}
                  ></i>
                  <i className="fa fa-ellipsis-h"></i>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <MenuRight
        currentMusic={currentMusic}
        isOpenMenuRight={isOpenMenuRight}
        handleUpdateCurrentMusic={handleUpdateCurrentMusic}
        handleUpdateNextMusic={handleUpdateNextMusic}
        handleUpdatePreviousMusic={handleUpdatePreviousMusic}
      />
    </>
  );
};
export default MusicPlayer;
