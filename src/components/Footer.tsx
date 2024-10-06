import { useTranslation } from "react-i18next";
import { NAV_ITEMS, SOCIALS } from "@constants/lists";
import { Container } from "./ui/Container";
import { Icon } from "./ui/Icon";
import { Logo } from "./ui/Logo";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bottom-0 bg-gradient-to-t from-[rgba(2,89,56,0.5)] to-[#dafef0ff] py-12">
      <Container>
        <div className="flex flex-col justify-center space-y-8 px-4 text-center md:flex-row md:gap-6 md:space-y-0">
          <div className="flex flex-1 flex-col items-center md:items-start lg:max-w-[40%]">
            <Logo />
            <p className="mt-3 text-balance text-center text-sm md:text-start lg:text-base">
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

          <div className="flex flex-1 flex-col md:items-end">
            <div>
              <h4 className="py-2 text-lg font-semibold">
                {t("footer.company.heading")}
              </h4>
              <ul className="space-y-1">
                <li>{t("footer.company.name")}</li>
                <li>{t("footer.company.address")}</li>
                <li>{t("footer.company.businessId")}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-1 flex-col md:items-end">
            <div>
              <h4 className="py-2 text-lg font-semibold">{t("footer.link")}</h4>
              <ul className="space-y-2 text-center">
                {NAV_ITEMS.map(({ label, href }) => (
                  <li
                    key={t(label)}
                    className="cursor-pointer rounded-md px-4 text-sm font-medium transition-all duration-200 hover:text-accent1 hover:bg-accent1-10"
                  >
                    <NavLink
                      to={`/${t(href)}`}
                      className={({ isActive }) =>
                        `${isActive ? "text-accent1 underline-offset-4" : "underline-offset-0"}`
                      }
                    >
                      {t(label)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t-1 my-10 border-primary-40" />
        <p className="text-center font-medium">
          &copy; 2024 Vesko. All Rights Reserved
        </p>
        <NavLink
          to={"/privacy-policy"}
          className="my-2 flex justify-center font-medium underline"
        >
          {t("privacyPolicy.heading")}
        </NavLink>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
