import { createSlice } from "@reduxjs/toolkit";

const restaurants = [];

// 초기값
let initialState = {
  value: ["가게1", "가게2", "가게3"],
};
// goods: ["상품1", "상품2", "상품3"],
// dress: ["옷1", "옷2", "옷3"],

// createSlice 리덕스 만드는걸 도와줌
const restaurantDataSlice = createSlice({
  name: "restaurantsData",
  initialState,
  // 리듀서는 객체로 이루어져있고, 그 객체는 다 함수로 이루어짐
  reducers: {
    restaurantsInit: (state, action) => {
      // 리턴과 ...state 가 기본이라 생략 가능
      // 바꾸고 싶은 값만 작성함
      // state.productList = action.payload.data
      console.log("데이터 초기값 init");
    },
    restaurantCreate: (state, action) => {
      console.log("데이터 추가", action);
      console.log("데이터 추가", action.payload);
      // console.log("데이터 카테고리",action.category);
      state.value = state.value + action.payload.data;
    },
    restaurantUpdate: (state, action) => {
      console.log("데이터 수정");
    },
    restaurantDelete: (state, action) => {
      console.log("데이터 삭제");
    },
  },
});

export default restaurantDataSlice;
export const {
  restaurantsInit,
  restaurantCreate,
  restaurantDelete,
  restaurantUpdate,
} = restaurantDataSlice.actions;
// export default dataSlice.reducer;

// 디스패치 사용시
// dispatch(productActions.init({data}))
// 이렇게 써주면 data 가 알아서 payload 안에 들어감

// const data = {
//   restaurant: ["레스토랑1", "레스토랑2", "레스토랑3"],

//   goods: ["상품1", "상품2", "상품3"],
// };

// function reducer(state = data, action) {
//   let nextState;
//   let category = action.data.category;
//   let data = action.data;

//   switch (action.type) {
//     case "INIT": {
//       nextState = data;
//       break;
//     }

//     case "CREATE": {
//       nextState = [...state[category], data];
//       break;
//     }
//     case "UPDATE": {
//       nextState = state[category].map((item) =>
//         String(item.id) === String(data.id) ? data : item
//       );
//       break;
//     }
//     case "DELETE": {
//       nextState = state[category].filter(
//         (item) => String(item.id) !== String(data.id)
//       );
//       break;
//     }
//     default:
//       return state;
//   }

//   // if (action.type === "증가") {
//   //   if (action.category === "restaurant") {
//   //     state.restaurant = ["레스토랑 추가닷"];
//   //   } else {
//   //     console.log("레스토랑 아님");
//   //   }
//   // }
//   return state;
// }
