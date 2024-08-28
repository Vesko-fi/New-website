import { RouteObject } from "react-router-dom";

import Home from "@pages/Home";
import NotFoundPage from "@pages/NotFoundPage";
import Users from "@pages/Users";

export const routes: RouteObject[] = [
  { path: "/", Component: Home },
  { path: "/for-users", Component: Users },
  { path: "*", Component: NotFoundPage },
];
