import "../styles/menuright.scss";
import APIMusic from "../api/APIMusic";
import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const MenuRight = (props) => {
  const [openMenuRight, setOpenMenuRight] = useState();
  const [menuRight, setMenuRight] = useState();
  const [order, setOrder] = useState();
  const {
    isOpenMenuRight,
    handleUpdateCurrentMusic,
    handleUpdateNextMusic,
    handleUpdatePreviousMusic,
  } = props;
  const { data: dataMusic, isLoading } = APIMusic("getMusicList", 2000);
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
      handleUpdateNextMusic(data);
      handleUpdatePreviousMusic(data);
      setOrder(data.id);
    }
  };

  return (
    <>
      {/* {isLoading && <Loading />} */}
      <div className="menu-right">
        <div className="menu-list">
          {isLoading && (
            <>
              <SkeletonTheme baseColor="#464646" highlightColor="#191420">
                <div className="menu-pre">
                  <div className="pre-thumbnail">
                    <Skeleton height={40} width={40} />
                  </div>
                  <div className="pre-info">
                    <span className="pre-name">
                      <Skeleton width={150} />
                    </span>
                    <span className="pre-artis">
                      <Skeleton width={150} />
                    </span>
                  </div>
                </div>
                <div className="menu-pre">
                  <div className="pre-thumbnail">
                    <Skeleton height={40} width={40} />
                  </div>
                  <div className="pre-info">
                    <span className="pre-name">
                      <Skeleton width={150} />
                    </span>
                    <span className="pre-artis">
                      <Skeleton width={150} />
                    </span>
                  </div>
                </div>
                <div className="menu-pre">
                  <div className="pre-thumbnail">
                    <Skeleton height={40} width={40} />
                  </div>
                  <div className="pre-info">
                    <span className="pre-name">
                      <Skeleton width={150} />
                    </span>
                    <span className="pre-artis">
                      <Skeleton width={150} />
                    </span>
                  </div>
                </div>
                <div className="menu-pre">
                  <div className="pre-thumbnail">
                    <Skeleton height={40} width={40} />
                  </div>
                  <div className="pre-info">
                    <span className="pre-name">
                      <Skeleton width={150} />
                    </span>
                    <span className="pre-artis">
                      <Skeleton width={150} />
                    </span>
                  </div>
                </div>
                <div className="menu-pre">
                  <div className="pre-thumbnail">
                    <Skeleton height={40} width={40} />
                  </div>
                  <div className="pre-info">
                    <span className="pre-name">
                      <Skeleton width={150} />
                    </span>
                    <span className="pre-artis">
                      <Skeleton width={150} />
                    </span>
                  </div>
                </div>
              </SkeletonTheme>
            </>
          )}
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
