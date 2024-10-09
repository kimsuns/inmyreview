import { configureStore } from "@reduxjs/toolkit";
import restaurantDataSlice from "../restaurantDataSlice";

export const store = configureStore({
  reducer: {
    // 기존 combinereducer에 썼던 것을 여기다 쓰면 됨
    restaurantsData: restaurantDataSlice.reducer,
  },
});

// 리덕스가 업데이트 되면서 createStore 지원 안 함
// configureStore 로 쓰면서 기존에 써줘야했던 combinereducer, thunk, applyMiddleware, composeWithDevTools 를 안 써줘도 됨
