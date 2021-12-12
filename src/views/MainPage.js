import "../styles/mainpage.scss";
import UserInfo from "./UserInfo";
import Category from "./Category";
import NewMusic from "./NewMusic";
import Search from "./Search";
const MainPage = () => {
  return (
    <>
      <div className="mainpage">
        <Search />
        <UserInfo />
        <Category />
        <NewMusic />
      </div>
    </>
  );
};
export default MainPage;
