import Home from "@pages/Home";
import NotFoundPage from "@pages/NotFoundPage";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  { path: "/", Component: Home },
  { path: "*", Component: NotFoundPage },
];
