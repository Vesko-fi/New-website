import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18n from "./locales/i18n";
import { AppRouter } from "./router/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <AppRouter />
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
