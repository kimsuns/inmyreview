import { createSlice } from "@reduxjs/toolkit";

// 초기값
let initialState = {
  value: [
    { id: 1, name: "11111번" },
    { id: 2, name: "2번" },
  ],
  // value: 0,
};

// createSlice 리덕스 만드는걸 도와줌
const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  // 리듀서는 객체로 이루어져있고, 그 객체는 다 함수로 이루어짐
  reducers: {
    restaurantInit: (state, action) => {
      // 리턴과 ...state 가 기본이라 생략 가능
      // 바꾸고 싶은 값만 작성함
      // state.productList = action.payload.data
      console.log("데이터 초기값 init");
    },
    restaurantCreate: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    restaurantUpdate: (state, action) => {
      state.value = state.value.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    restaurantDelete: (state, action) => {
      console.log("데이터 삭제");
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default restaurantSlice;
export const {
  restaurantInit,
  restaurantCreate,
  restaurantDelete,
  restaurantUpdate,
} = restaurantSlice.actions;
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
