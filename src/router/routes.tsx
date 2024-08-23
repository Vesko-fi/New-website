import { RouteObject } from "react-router-dom";

import Home from "@pages/Home";
import NotFoundPage from "@pages/NotFoundPage";

export const routes: RouteObject[] = [
  { path: "/", Component: Home },
  { path: "*", Component: NotFoundPage },
];
