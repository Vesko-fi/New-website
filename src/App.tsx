import { I18nextProvider } from "react-i18next";
import { BrowserRouter, useLocation } from "react-router-dom";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import i18n from "./locales/i18n";
import { AppRouter } from "./router/AppRouter";
import ScrollToTop from "@components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppWithFooter />
    </BrowserRouter>
  );
};

const AppWithFooter = () => {
  const location = useLocation(); // Get the current route

  // Check if the current route is the EventPage
  const isEventPage = location.pathname === "/events"; // Change this to your actual event page path

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main className="min-h-[90dvh]">
        <AppRouter />
      </main>
      {!isEventPage && <Footer />}
    </I18nextProvider>
  );
};

export default App;
