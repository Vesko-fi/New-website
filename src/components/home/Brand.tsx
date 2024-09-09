import { Button } from "@components/ui/Button";
import { useNavigate } from "react-router-dom";

const Brand: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/waiting-list"); // Navigates to the "About" page
  };
  return (
    <div className="mt-12 text-center">
      <h2 className="text-4xl font-semibold md:text-5xl xl:text-7xl">
        Build your Brand
      </h2>
      <p className="mx-auto mb-10 mt-4 max-w-96 text-base md:max-w-4xl md:text-xl">
        See how omnichannel powered marketplace will help you build your brand.{" "}
        <br />
        <span className="mt-2 block font-medium">
          Be the first to access early version of Vesko.
        </span>
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button>Get a Demo</Button>
        <Button variant="outline" onClick={handleClick}>
          Join the Waitlist
        </Button>
      </div>
    </div>
  );
};
Brand.displayName = "Brand";
export default Brand;
