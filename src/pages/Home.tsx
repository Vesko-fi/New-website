import { SEO } from "@components/SEO";
import { ToggleLocale } from "@components/ToggleLocale";
import { Button } from "@components/ui/Button";
import { Container } from "@components/ui/Container";
import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Vesko"
        keywords="vesko, services"
      />
      <Container>
        <ToggleLocale />
        <h1 className="text-3xl font-bold">{t("welcome")}</h1>
        <Button>Vesko button</Button>
      </Container>
    </>
  );
};

export default Home;
