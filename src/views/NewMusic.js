import { useState, useEffect } from "react";
import APIMusic from "../api/APIMusic";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewMusic = () => {
  const { data: dataMusic, isLoading } = APIMusic("getMusicList");
  const handleChangeMusic = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="mg-rl-20px ">
        <h3 className="title">New Music</h3>

        <div className="category">
          {isLoading && (
            <>
              <SkeletonTheme baseColor="#464646" highlightColor="#191420">
                <div className="category-item">
                  <div className="item-thumbnail">
                    <Skeleton height={178} />
                  </div>
                  <div className="item-desc">
                    <span className="item-name">
                      <Skeleton />
                    </span>
                    <span className="item_desc">
                      <Skeleton />
                    </span>
                  </div>
                </div>
                <div className="category-item">
                  <div className="item-thumbnail">
                    <Skeleton height={178} />
                  </div>
                  <div className="item-desc">
                    <span className="item-name">
                      <Skeleton />
                    </span>
                    <span className="item_desc">
                      <Skeleton />
                    </span>
                  </div>
                </div>
                <div className="category-item">
                  <div className="item-thumbnail">
                    <Skeleton height={178} />
                  </div>
                  <div className="item-desc">
                    <span className="item-name">
                      <Skeleton />
                    </span>
                    <span className="item_desc">
                      <Skeleton />
                    </span>
                  </div>
                </div>
                <div className="category-item">
                  <div className="item-thumbnail">
                    <Skeleton height={178} />
                  </div>
                  <div className="item-desc">
                    <span className="item-name">
                      <Skeleton />
                    </span>
                    <span className="item_desc">
                      <Skeleton />
                    </span>
                  </div>
                </div>
                <div className="category-item">
                  <div className="item-thumbnail">
                    <Skeleton height={178} />
                  </div>
                  <div className="item-desc">
                    <span className="item-name">
                      <Skeleton />
                    </span>
                    <span className="item_desc">
                      <Skeleton />
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
                  <div className="category-item" key={item.id}>
                    <div className="item-thumbnail">
                      <div className="item-thumbnail_hover"></div>
                      <div
                        className="item-play_icon"
                        onClick={() => handleChangeMusic(item)}
                      >
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </div>
                      <img src={item.image} alt="" />
                    </div>
                    <div className="item-desc">
                      <span className="item-name">{item.name}</span>
                      <span className="item_desc">{item.author}</span>
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
export default NewMusic;
