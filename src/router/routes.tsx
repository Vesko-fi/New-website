import { RouteObject } from "react-router-dom";

import Home from "@pages/Home";
import NotFoundPage from "@pages/NotFoundPage";
import Vendors from "@pages/Vendors";
import Users from "@pages/Users";

export const routes: RouteObject[] = [
  { path: "/", Component: Home },
  { path: "/for-vendors", Component: Vendors },
  { path: "/for-users", Component: Users },
  { path: "*", Component: NotFoundPage },
];
