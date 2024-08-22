import { NAV_ITEMS, SOCIALS } from "@constants/lists";
import { Container } from "./ui/Container";
import { Icon } from "./ui/Icon";
import { Link } from "./ui/Link";
import { Logo } from "./ui/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="relative bottom-0 bg-gradient-to-t from-[rgba(2,89,56,0.5)] py-12">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="max-w-[40%] flex-1">
            <Logo />
            <p className="mt-3 text-balance text-sm lg:text-base">
              The expected release date of the beta version is during the 2
              <sup>nd</sup> quarter of 2025
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ href, icon }) => (
                <a
                  href={href}
                  key={icon}
                  className="transition-colors duration-200 hover:text-accent1"
                >
                  <Icon icon={icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex max-w-[60%] flex-1">
            <div className="flex-1">
              <h4 className="mb-2 px-3 text-lg font-semibold">Information</h4>
              <ul>
                <li>
                  <Link>Terms & Condition</Link>
                </li>
                <li>
                  <Link>Privacy & Policy</Link>
                </li>
                <li>
                  <Link>Refund Policy</Link>
                </li>
                <li>
                  <Link>Community</Link>
                </li>
                <li>
                  <Link>Forum</Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="mb-2 px-3 text-lg font-semibold">Useful Links</h4>
              <ul>
                {NAV_ITEMS.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t-1 my-12 border-accent1" />
        <p className="text-center font-medium">
          &copy; 2024 Vesko. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
