import { RouteObject } from "react-router-dom";

import Home from "@pages/Home";
import NotFoundPage from "@pages/NotFoundPage";
import { Contact } from "@pages/Contact";

export const routes: RouteObject[] = [
  { path: "/", Component: Home },
  { path: "/contact-us", Component: Contact },
  { path: "*", Component: NotFoundPage },
];
