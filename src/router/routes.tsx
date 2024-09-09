import { RouteObject } from "react-router-dom";

import Home from "@pages/Home";
import NotFoundPage from "@pages/NotFoundPage";
import Vendors from "@pages/Vendors";
import AboutUs from "@pages/AboutUs";

export const routes: RouteObject[] = [
  { path: "/", Component: Home },
  { path: "/for-vendors", Component: Vendors },
  { path: "/about-us", Component: AboutUs },
  { path: "*", Component: NotFoundPage },
];
