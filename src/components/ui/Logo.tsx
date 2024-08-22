import { logo } from "@constants/assets";

const Logo: React.FC = () => {
  return (
    <a href="/">
      <img src={logo} alt="Vesko Logo" className="w-32 sm:w-40" />
    </a>
  );
};

Logo.displayName = "Logo";

export { Logo };
