import "../styles/fullview.scss";
const FullView = (props) => {
  const { currentMusic, handleCloseFullView } = props;
  const handleClickCloseFullView = () => {
    handleCloseFullView(false);
  };
  return (
    <>
      <div className="fullview">
        <div
          className="turn-off_fullview"
          onClick={() => handleClickCloseFullView()}
        >
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>

        {currentMusic && (
          <>
            <div className="info-current_music">
              <div className="thumbnail-current">
                <img src={currentMusic.image} />
              </div>
              <div className="desc-current">
                <span className="music_name">{currentMusic.name}</span>
                <span className="music_author">{currentMusic.author}</span>
              </div>
            </div>
            <div className="music-player">
              <div className="nav-down">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </div>

              <div className="music-playing">
                <div className="playbar-bottom">
                  <span className="time-left">00:00</span>
                  <input
                    type="range"
                    className="range"
                    name="vol"
                    min="0"
                    max="50"
                  />
                  <span className="time-right">00:00</span>
                </div>
                <div className="playbar-top">
                  <i className="fa fa-random" aria-hidden="true"></i>
                  <i className="fa fa-step-backward" aria-hidden="true"></i>
                  <i
                    className="fa play-icon fa-play-circle-o"
                    style={{ fontSize: "40px" }}
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-step-forward" aria-hidden="true"></i>
                  <i className="fa fa-repeat" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default FullView;
