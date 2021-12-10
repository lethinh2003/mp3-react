import "../styles/menuright.scss";
import Loading from "./Loading";
import APIMusic from "../api/APIMusic";
import { useState, useEffect } from "react";
const MenuRight = (props) => {
  const [openMenuRight, setOpenMenuRight] = useState();
  const [menuRight, setMenuRight] = useState();
  const [order, setOrder] = useState();
  const { isOpenMenuRight, handleUpdateCurrentMusic } = props;
  const { data: dataMusic, isLoading } = APIMusic("getMusicList");
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
          {dataMusic &&
            dataMusic.length > 0 &&
            dataMusic.map((item) => {
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
