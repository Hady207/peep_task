import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path={"about"} element={<About />} />
    </Route>
  )
);
