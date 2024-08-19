import React from "react";
import { useTranslation } from "react-i18next";

import { SEO } from "@components/SEO";
import { ToggleLocale } from "@components/ToggleLocale";
import { Button } from "@components/ui/Button";
import { Container } from "@components/ui/Container";

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
        <Button>
          Accent 1 Accent 1Accent 1Accent 1Accent 1Accent 1Accent 1 Accent 1
          Accent 1 Accent 1 Accent 1 Accent 1
        </Button>
        <Button variant="outline" size="lg">
          Accent 1 lg
        </Button>
        <Button variant="link">Accent 1</Button>
        <Button variant="ghost">Accent 1</Button>
        <Button variant="secondary" size="sm">
          Accent 1
        </Button>
      </Container>
    </>
  );
};

export default Home;
