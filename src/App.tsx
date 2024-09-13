import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import i18n from "./locales/i18n";
import { AppRouter } from "./router/AppRouter";
import ScrollToTop from "@components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <I18nextProvider i18n={i18n}>
        <Header />
        <main className="min-h-[90dvh]">
          <AppRouter />
        </main>
        <Footer />
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
