import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import ListRestaurants from "../pages/List/ListRestaurants";
import ViewRestaurant from "../pages/View/ViewRestaurant";
import ListGoods from "../pages/List/ListGoods";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/list">
            <Route path="restaurants" element={<ListRestaurants />} />
            <Route path="goods" element={<ListGoods />} />
          </Route>
          <Route path="/view">
            <Route path="restaurant/:id" element={<ViewRestaurant />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default MyRoutes;
