import "../styles/menuright.scss";
import Loading from "./Loading";
import { useState, useEffect } from "react";
const MenuRight = (props) => {
  const [openMenuRight, setOpenMenuRight] = useState();
  const [menuRight, setMenuRight] = useState();
  const [order, setOrder] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { isOpenMenuRight, handleUpdateCurrentMusic } = props;
  const PlayList = [
    {
      id: 1,
      name: "Call Of Silence",
      image: "https://i.imgur.com/0HSZKLu.jpg",
      link: "../mp3/CallOfSilence.mp3",
      author: "Hiroyuki Sawano; Gemie",
      category: "JP",
    },
    {
      id: 2,
      name: "Nandemonaiya",
      image: "https://i.imgur.com/uJxbqaC.jpg",
      link: "../mp3/Nandemonaiya.mp3",
      author: "Kamishiraishi Mone",
      category: "JP",
    },
    {
      id: 3,
      name: "Uchiage Hanabi",
      image: "https://i.imgur.com/98jj7w2.jpg",
      link: "../mp3/UchiageHanabi.mp3",
      author: "Kenshi Yonezu",
      category: "JP",
    },
    {
      id: 4,
      name: "Hazakura",
      image: "https://i.imgur.com/3B2eBcK.jpg",
      link: "../mp3/Hazakura.mp3",
      author: "Kie Kitano",
      category: "JP",
    },
    {
      id: 5,
      name: "Orange",
      image: "https://i.imgur.com/WdlbOlN.jpg",
      link: "../mp3/Orange7.mp3",
      author: "7!!",
      category: "JP",
    },
  ];
  useEffect(() => {
    const menuRight = document.querySelector(".menu-right");
    setOpenMenuRight(openMenuRight);
    setMenuRight(menuRight);
  }, []);
  if (isOpenMenuRight === true && menuRight) {
    menuRight.style = `transform: translateX(0); height: 100%`;
  } else if (isOpenMenuRight === false && menuRight) {
    menuRight.style = `transform: translateX(100%); height: 100%`;
  }
  const handleChangeMusic = async (data, e) => {
    const menuPre = document.querySelectorAll(".menu-pre");
    if (menuPre && menuPre.length > 0) {
      menuPre.forEach((item) => {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
    }

    if (data) {
      handleUpdateCurrentMusic(data);

      // handleUpdateCurrentMusic(data);
      setOrder(data.id);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="menu-right">
        <div className="menu-list">
          {PlayList &&
            PlayList.length > 0 &&
            PlayList.map((item) => {
              return (
                <>
                  <div
                    className="menu-pre"
                    onClick={(e) => handleChangeMusic(item, e)}
                    key={item.id}
                  >
                    <div className="pre-thumbnail">
                      <div className="pre-icon_play">
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </div>
                      <img src={item.image} alt="" />
                    </div>
                    <div className="pre-info">
                      <span className="pre-name">{item.name}</span>
                      <span className="pre-artis">{item.author}</span>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default MenuRight;
