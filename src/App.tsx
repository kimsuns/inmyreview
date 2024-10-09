import { createContext, useReducer } from "react";
import MyRoutes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const DataContext = createContext();
export const DispatchContext = createContext();

function App() {
  // const [data, dataDispatch] = useReducer(reducer, {});
  return (
    <>
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    </>
  );
}

export default App;
