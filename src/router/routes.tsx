import { RouteObject } from "react-router-dom";

import Home from "@pages/Home";
import NotFoundPage from "@pages/NotFoundPage";
import { Contact } from "@pages/Contact";
import { WaitingListPage } from "@pages/WaitingListPage";
import { DemoPage } from "@pages/DemoPage";
import Vendors from "@pages/Vendors";
import Users from "@pages/Users";
import AboutUs from "@pages/AboutUs";
import PrivacyPolicyPage from "@pages/PrivacyPolicyPage";
import EventPage from "@pages/EventPage";

export const routes: RouteObject[] = [
  { path: "/", Component: Home },
  { path: "/for-vendors", Component: Vendors },
  { path: "/for-users", Component: Users },
  { path: "/about-us", Component: AboutUs },
  { path: "/contact-us", Component: Contact },
  { path: "/waiting-list", Component: WaitingListPage },
  { path: "/demo", Component: DemoPage },
  { path: "/privacy-policy", Component: PrivacyPolicyPage },

  { path: "/events", Component: EventPage },

  { path: "*", Component: NotFoundPage },
];
