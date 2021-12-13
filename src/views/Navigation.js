import "../styles/navigation.scss";
import APIMusic from "../api/APIMusic";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
const Navigation = () => {
  const { data: dataCategoryMusic } = APIMusic("getMusicCategory", 0);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [nav, setNav] = useState();
  const [navOpen, setNavOpen] = useState();
  const [navItem, setNavItem] = useState();
  const [navItemTitle, setNavItemTitle] = useState();
  const [navLogoImg, setNavLogoImg] = useState();

  useEffect(() => {
    const navOpen = document.querySelector(".nav-open");
    const navi = document.querySelector(".navigation");
    const navItem = document.querySelectorAll(".nav-item");
    const navItemTitle = document.querySelectorAll(".nav-item__title");
    const navLogoImg = document.querySelector(".navigation .logo img");
    setNav(navi);
    setNavOpen(navOpen);
    setNavItem(navItem);
    setNavItemTitle(navItemTitle);
    setNavLogoImg(navLogoImg);
  }, []);
  const handleOpenMenu = () => {
    if (isOpenMenu === false && nav && navItemTitle && navLogoImg && navOpen) {
      nav.style.width = "250px";
      navItemTitle.forEach((item) => {
        item.style.display = "block";
      });
      navLogoImg.style.opacity = "1";
      if (navLogoImg.style.opacity == "1") {
        navOpen.innerHTML = `<i class="fa fa-chevron-left" aria-hidden="true"></i>`;
        navOpen.style.right = "0";
      }
      setIsOpenMenu(true);
    } else if (
      isOpenMenu === true &&
      nav &&
      navItemTitle &&
      navLogoImg &&
      navOpen
    ) {
      nav.style.width = "";
      navItemTitle.forEach((item) => {
        item.style = "";
      });
      navLogoImg.style = "";

      navOpen.innerHTML = `<i class="fa fa-chevron-right" aria-hidden="true"></i>`;
      navOpen.style = "";

      setIsOpenMenu(false);
    }
  };

  return (
    <>
      <div className="navigation">
        <div className="logo">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <div className="nav-bar">
          <NavLink to="/" activeClassName="active" exact>
            <div className="nav-item">
              <div className="nav-item__detail">
                <i className="fa fa-home" aria-hidden="true"></i>
                <span className="nav-item__title">Trang chủ</span>
              </div>
            </div>
          </NavLink>
          {/* {dataCategoryMusic &&
            dataCategoryMusic.length > 0 &&
            dataCategoryMusic.map((item) => {
              return (
                <NavLink
                  to={"/category/" + item.category}
                  activeClassName="active"
                  exact
                >
                  <div className="nav-item" key={item.category}>
                    <div className="nav-item__detail">
                      <i className="fa fa-music" aria-hidden="true"></i>
                      <span className="nav-item__title">{item.desc}</span>
                    </div>
                  </div>
                </NavLink>
              );
            })} */}
        </div>
        <div className="nav-open" onClick={() => handleOpenMenu()}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};
export default Navigation;
