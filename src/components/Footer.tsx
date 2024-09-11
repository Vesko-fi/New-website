import { useTranslation } from "react-i18next";
import { NAV_ITEMS, SOCIALS } from "@constants/lists";
import { Container } from "./ui/Container";
import { Icon } from "./ui/Icon";
import { Link } from "./ui/Link";
import { Logo } from "./ui/Logo";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bottom-0 bg-gradient-to-t from-[rgba(2,89,56,0.5)] to-[#dafef0ff] py-12">
      <Container>
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-6">
          <div className="flex-1 px-3 lg:max-w-[40%]">
            <Logo />
            <p className="mt-3 text-balance text-sm lg:text-base">
              {t("footer.text")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ href, icon }) => (
                <a
                  href={href}
                  key={icon}
                  target="_blank"
                  className="transition-colors duration-200 hover:text-accent1"
                >
                  <Icon icon={icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-1 lg:max-w-[60%]">
            <div className="flex-1">
              <h4 className="mb-2 px-3 text-lg font-semibold">
                {t("footer.company.heading")}
              </h4>
              <ul>
                <li>{t("footer.company.name")}</li>
                <li>{t("footer.company.address")}</li>
                <li>{t("footer.company.businessId")}</li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="mb-2 px-3 text-lg font-semibold">{}</h4>
              <ul>
                {NAV_ITEMS.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href}> {t(label)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t-1 my-12 border-primary-40" />
        <p className="text-center font-medium">
          &copy; 2024 Vesko. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
