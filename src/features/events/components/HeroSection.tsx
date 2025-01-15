import { banner } from "@constants/assets";

const HeroSection = () => {
  return (
    <div className="h-full text-white">
      <div className="mx-auto aspect-auto w-full md:w-3/4 lg:w-3/4">
        <img
          src={`${banner}`}
          alt="Banner"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

HeroSection.displayName = "HeroSection";
export { HeroSection };
