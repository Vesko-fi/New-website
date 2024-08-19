import React from "react";
import { useTranslation } from "react-i18next";

import { Header } from "@components/Header";
import { SEO } from "@components/SEO";
import { Button } from "@components/ui/Button";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Vesko"
        keywords="vesko, services"
      />
      <Header />
      <Section>
        <Container>
          <h1 className="text-3xl font-bold">{t("welcome")}</h1>
          <Button>Vesko</Button>
          <Button variant="outline" size="lg">
            Accent 1 lg
          </Button>
          <Button variant="link">Accent 1</Button>
          <Button variant="ghost">Accent 1</Button>
          <Button variant="secondary" size="sm">
            Accent 1
          </Button>
        </Container>
      </Section>
    </>
  );
};

export default Home;
