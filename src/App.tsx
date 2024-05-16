import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Banner } from "./componentes/banner";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Banner />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}
