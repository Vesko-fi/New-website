import { SEO } from "@components/SEO";
import { Button } from "@components/ui/Button";
import { LOCALE_ITEMS } from "@constants/localeItems";
import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    i18n.changeLanguage(event.target.value as string).catch(console.log);
  };

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Vesko"
        keywords="vesko, services"
      />
      <select value={i18n.language} onChange={handleLanguageChange}>
        {LOCALE_ITEMS.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">{t("welcome")}</h1>
        <Button>Vesko button</Button>
      </div>
    </>
  );
};

export default Home;
