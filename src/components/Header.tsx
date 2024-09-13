import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { NavItem } from "./nav/NavItem";
import { ToggleLocale } from "./ToggleLocale";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Icon } from "./ui/Icon";
import { Link } from "./ui/Link";
import { Logo } from "./ui/Logo";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    navigate("/demo");
  };

  const handleToggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent click from closing the menu
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseMenu);
    return () => {
      document.removeEventListener("mousedown", handleCloseMenu);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 py-2 backdrop-blur-md bg-background-80">
      <Container className="flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex">
          <ul className="flex items-center">
            <NavItem />
          </ul>
        </nav>
        <div ref={menuRef} className="relative">
          <div className="hidden items-center gap-4 md:flex">
            <ToggleLocale />
            <Link onClick={handleClick} variant="primary" size="md">
              {t("home.landingPage.buttonText")}
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
            className={`absolute right-2 top-16 flex w-52 flex-col gap-2 rounded-lg border bg-background p-2 border-secondary-20 md:hidden ${isOpen ? "block" : "hidden"}`}
          >
            <nav>
              <ul>
                <NavItem />
              </ul>
            </nav>
            <ToggleLocale />
            <Link variant="primary" size="md" onClick={handleClick}>
              {t("home.landingPage.buttonText")}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.displayName = "Header";

export { Header };
