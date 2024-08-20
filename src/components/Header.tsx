import { NavItem } from "./nav/NavItem";
import { ToggleLocale } from "./ToggleLocale";
import { Container } from "./ui/Container";
import { Link } from "./ui/Link";
import { Logo } from "./ui/Logo";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 py-2 backdrop-blur-3xl">
      <Container className="flex items-center justify-between">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex items-center">
            <NavItem />
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ToggleLocale />
          <Link variant="primary" size="md" href="/">
            Get a Demo
          </Link>
        </div>
      </Container>
    </header>
  );
};

Header.displayName = "Header";

export { Header };
