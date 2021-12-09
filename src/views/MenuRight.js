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
