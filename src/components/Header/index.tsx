import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to={"/"}>홈</Link>
      <Link to={"/list/restaurants"}>리스트</Link>
      <Link to={"/view/restaurant/1"}>뷰</Link>
    </div>
  );
}

export default Header;
