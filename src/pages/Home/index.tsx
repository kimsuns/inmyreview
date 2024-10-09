import { useDispatch, useSelector } from "react-redux";
import { restaurantCreate } from "../../redux/restaurantDataSlice";

function Home() {
  const addData = "추가될 데이터";
  const addGoods = {
    data: "추가될 데이터",
  };
  const data = "레스토랑";
  const getData = useSelector((state) => state.restaurantsData.value);
  // const getDatagood = useSelector((state) => state.userData.goods);
  const dispatch = useDispatch();
  console.log("겟데이터", getData);
  return (
    <div>
      Home
      <div>{getData}</div>
      <button
        onClick={() => {
          // dispatch({ type: "증가", category: "restaurant" });
          dispatch(restaurantCreate(addData));
        }}
      >
        음식점 증가
      </button>
      {/* <div>{getDatagood}</div> */}
      <button
        onClick={() => {
          // dispatch({ type: "증가", category: "restaurant" });
          // dispatch(addGoods);
        }}
      >
        가게 증가
      </button>
    </div>
  );
}

export default Home;
