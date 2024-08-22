import { NAV_ITEMS } from "@constants/lists";
import { Container } from "./ui/Container";
import { Link } from "./ui/Link";
import { Logo } from "./ui/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="relative bottom-0 py-12 bg-accent1-10">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="max-w-[40%] flex-1">
            <Logo />
            <p className="mt-3 text-balance text-sm lg:text-base">
              The expected release date of the beta version is during the 2
              <sup>nd</sup> quarter of 2025
            </p>
            <div></div>
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
        <hr className="mt-12 border border-primary-10" />
        <p className="pt-12 text-center">
          &copy; 2024 Vesko. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
