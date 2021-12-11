import APIMusic from "../api/APIMusic";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";
const Category = () => {
  const { data: dataCategoryMusic, isLoading } = APIMusic(
    "getMusicCategory",
    1500
  );

  return (
    <>
      <div className="mg-rl-20px ">
        <h3 className="title">Category</h3>

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
          {dataCategoryMusic &&
            dataCategoryMusic.length > 0 &&
            dataCategoryMusic.map((item) => {
              return (
                <>
                  <div className="category-item" key={item.category}>
                    <div className="item-thumbnail">
                      <div className="item-thumbnail_hover"></div>
                      <div className="item-play_icon">
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </div>
                      <img src={item.image} alt="" />
                    </div>
                    <div className="item-desc">
                      <span className="item-name">{item.title}</span>
                      <span className="item_desc">{item.desc}</span>
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
export default Category;
