import Search from "../Search";
import "./getcategory.scss";
import APIMusic from "../../api/APIMusic";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams, useHistory } from "react-router-dom";
const GetCateGory = () => {
  const { category } = useParams();
  const { data: dataCategoryMusic, isLoading } = APIMusic(
    "getMusicCategory",
    2000,
    category
  );

  return (
    <div className="mainpage">
      <Search />

      <div className="category-container mg-20px">
        <div className="box-left">
          <div className="left-images">
            <img src="https://i.imgur.com/XGjHmGp.jpg" />
          </div>
          <div className="left-desc">
            <span className="desc-title">Le Thinh</span>
            <span className="desc-author">Le Thinh</span>
          </div>
        </div>
        <div className="box-right">
          <span className="right-title">Bạn đang xem PlayList {category}</span>
          {isLoading && (
            <>
              <SkeletonTheme baseColor="#464646" highlightColor="#191420">
                <div className="right-list_item">
                  <div className="list-item_left">
                    <Skeleton height={50} />
                  </div>
                  <div className="list-item_right">
                    <span className="item-right_name">
                      <Skeleton />
                    </span>
                    <span className="item-right_author">
                      <Skeleton />
                    </span>
                  </div>
                </div>
              </SkeletonTheme>
              <SkeletonTheme baseColor="#464646" highlightColor="#191420">
                <div className="right-list_item">
                  <div className="list-item_left">
                    <Skeleton height={50} />
                  </div>
                  <div className="list-item_right">
                    <span className="item-right_name">
                      <Skeleton />
                    </span>
                    <span className="item-right_author">
                      <Skeleton />
                    </span>
                  </div>
                </div>
              </SkeletonTheme>
              <SkeletonTheme baseColor="#464646" highlightColor="#191420">
                <div className="right-list_item">
                  <div className="list-item_left">
                    <Skeleton height={50} />
                  </div>
                  <div className="list-item_right">
                    <span className="item-right_name">
                      <Skeleton />
                    </span>
                    <span className="item-right_author">
                      <Skeleton />
                    </span>
                  </div>
                </div>
              </SkeletonTheme>
            </>
          )}
          {dataCategoryMusic &&
            dataCategoryMusic.length > 0 &&
            dataCategoryMusic.map((item) => {
              return (
                <>
                  <div className="right-list_item">
                    <div className="list-item_left">
                      <img src={item.image} />
                    </div>
                    <div className="list-item_right">
                      <span className="item-right_name">{item.name}</span>
                      <span className="item-right_author">{item.author}</span>
                    </div>
                  </div>
                  <div className="right-list_item">
                    <div className="list-item_left">
                      <img src={item.image} />
                    </div>
                    <div className="list-item_right">
                      <span className="item-right_name">{item.name}</span>
                      <span className="item-right_author">{item.author}</span>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default GetCateGory;
