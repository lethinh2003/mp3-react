import "../styles/mainpage.scss";
import UserInfo from "./UserInfo";
import Category from "./Category";
import NewMusic from "./NewMusic";
const MainPage = () => {
  return (
    <>
      <div className="mainpage">
        <UserInfo />
        <Category />
        <NewMusic />
      </div>
    </>
  );
};
export default MainPage;
