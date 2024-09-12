import { useState } from "react";

import { NavItem } from "./nav/NavItem";
import { ToggleLocale } from "./ToggleLocale";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Icon } from "./ui/Icon";
import { Link } from "./ui/Link";
import { Logo } from "./ui/Logo";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/demo");
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 overflow-x-clip py-2 backdrop-blur-2xl bg-background-80">
      <Container className="flex items-center justify-between">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex items-center">
            <NavItem />
          </ul>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <ToggleLocale />
          <Link onClick={handleClick} variant="primary" size="md">
            {t("home.landingPage.buttonText")} {/**Later it can be updated */}
          </Link>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={handleToggleMenu}
        >
          <Icon icon={isOpen ? "close" : "menu"} />
        </Button>
        <div
          className={`absolute right-2 top-20 flex w-52 flex-col gap-2 rounded-lg border bg-background p-2 transition-all duration-200 border-secondary-20 md:hidden ${isOpen ? "opacity-1 translate-x-0" : "translate-x-[150%] opacity-0"}`}
        >
          <nav>
            <ul>
              <NavItem />
            </ul>
          </nav>
          <ToggleLocale />
          <Link variant="primary" size="md" href="/">
            {t("home.landingPage.buttonText")} {/**Later it can be updated */}
          </Link>
        </div>
      </Container>
    </header>
  );
};

Header.displayName = "Header";

export { Header };
