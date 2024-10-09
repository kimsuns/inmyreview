import { useDispatch, useSelector } from "react-redux";
import {
  restaurantCreate,
  restaurantDelete,
  restaurantUpdate,
} from "../../redux/restaurantSlice";

function Home() {
  const addData = {
    id: 3,
    name: "분식짱",
  };
  const addGoods = {
    data: "추가될 데이터",
  };

  const updateData = {
    id: 1,
    name: "수정했다",
  };
  const getData = useSelector((state) => state.restaurants.value);
  // const getDatagood = useSelector((state) => state.userData.goods);
  const dispatch = useDispatch();
  console.log("겟데이터", getData);
  return (
    <div>
      Home
      <div>
        {getData.map((item) => (
          <div>
            <div>{item.id}</div>
            <div>{item.name}</div>
          </div>
        ))}
        {/* {getData} */}
      </div>
      <button
        onClick={() => {
          // dispatch({ type: "증가", category: "restaurant" });
          dispatch(restaurantCreate(addData));
        }}
      >
        음식점 증가
      </button>
      <button
        onClick={() => {
          // dispatch({ type: "증가", category: "restaurant" });
          dispatch(restaurantUpdate(updateData));
        }}
      >
        음식점 수정
      </button>
      <button
        onClick={() => {
          // dispatch({ type: "증가", category: "restaurant" });
          dispatch(restaurantDelete(updateData));
        }}
      >
        음식점 삭제
      </button>
    </div>
  );
}

export default Home;
