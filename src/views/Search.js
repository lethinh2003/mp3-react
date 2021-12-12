import "../styles/search.scss";
import { CgSearch, CgTrending } from "react-icons/cg";
import { useState } from "react";
import APIMusic from "../api/APIMusic";

const Search = () => {
  const { data: dataMusic, isLoading } = APIMusic("getMusicList", 1000);

  const [keyword, setKeyword] = useState("");
  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className="search-bar mg-20px">
      <div
        className="search-box"
        style={
          keyword !== ""
            ? {
                backgroundColor: "#432275",
              }
            : {
                backgroundColor: "#2f2739",
              }
        }
      >
        <div className="search-form">
          <div className="search-icon">
            <CgSearch />
          </div>
          <div className="search-input">
            <input
              type="text"
              value={keyword}
              onChange={(e) => handleChangeKeyword(e)}
              placeholder="Nhập bài hát"
            />
          </div>
        </div>
        <div
          className="search-list"
          style={
            keyword !== ""
              ? {
                  display: "block",
                }
              : {
                  display: "none",
                }
          }
        >
          <div className="list-data">
            <div className="title-search">Kết quả tìm kiếm</div>
            {dataMusic &&
              dataMusic.length > 0 &&
              dataMusic.map((item) => {
                return (
                  <>
                    <div className="list-item" key={item.id}>
                      <div className="item-icon">
                        <CgTrending />
                      </div>
                      <div className="item-title">{item.name}</div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
