import APIMusic from "../api/APIMusic";
const Category = () => {
  const { data: dataCategoryMusic, isLoading } = APIMusic("getMusicCategory");
  return (
    <>
      <div className="mg-rl-20px ">
        <h3 className="title">Category</h3>

        <div className="category">
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
