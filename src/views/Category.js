const Category = () => {
  const catogory = [
    {
      title: "Nhật Bản",
      image: "https://i.imgur.com/XGjHmGp.jpg",
      desc: "Nhạc Nhật",
      category: "JP",
    },
    {
      title: "Anh Quốc",
      image: "https://i.imgur.com/gev29pD.jpg",
      desc: "Nhạc Anh",
      category: "UK",
    },
    {
      title: "Việt Nam",
      image: "https://i.imgur.com/AhOdwtH.jpg",
      desc: "Nhạc Việt Nam",
      category: "VN",
    },
  ];
  return (
    <>
      <h3 className="title">Category</h3>

      <div className="category">
        {catogory &&
          catogory.length > 0 &&
          catogory.map((item) => {
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
    </>
  );
};
export default Category;
