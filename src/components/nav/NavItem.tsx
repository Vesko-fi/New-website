import { NavLink } from "react-router-dom";

import { NAV_ITEMS } from "@constants/lists";

const NavItem: React.FC = () => {
  return NAV_ITEMS.map(({ href, label }) => (
    <li
      key={label}
      className="rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-accent1 hover:bg-accent1-10"
    >
      <NavLink
        to={href}
        className={({ isActive }) =>
          `${isActive ? "text-accent1 underline underline-offset-4" : "underline-offset-0"}`
        }
      >
        {label}
      </NavLink>
    </li>
  ));
};

NavItem.displayName = "NavItem";

export { NavItem };
