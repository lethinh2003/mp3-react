import { useState, useEffect } from "react";

const NewMusic = () => {
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
  const handleChangeMusic = (data) => {
    console.log(data);
  };
  return (
    <>
      <h3 className="title">New Music</h3>

      <div className="category">
        {PlayList &&
          PlayList.length > 0 &&
          PlayList.map((item) => {
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
    </>
  );
};
export default NewMusic;
