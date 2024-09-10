import { RouteObject } from "react-router-dom";

import Home from "@pages/Home";
import NotFoundPage from "@pages/NotFoundPage";
import { Contact } from "@pages/Contact";
import { WaitingListPage } from "@pages/WaitingListPage";
import { DemoPage } from "@pages/DemoPage";

export const routes: RouteObject[] = [
  { path: "/", Component: Home },
  { path: "/contact-us", Component: Contact },
  { path: "/waiting-list", Component: WaitingListPage },
  { path: "/demo", Component: DemoPage },
  { path: "*", Component: NotFoundPage },
];
