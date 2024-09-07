import { RouteObject } from "react-router-dom";

import Home from "@pages/Home";
import NotFoundPage from "@pages/NotFoundPage";
import Vendors from "@pages/Vendors";

export const routes: RouteObject[] = [
  { path: "/", Component: Home },
  { path: "/for-vendors", Component: Vendors },
  { path: "*", Component: NotFoundPage },
];
