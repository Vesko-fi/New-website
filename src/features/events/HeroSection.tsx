import { banner } from "@constants/assets";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] bg-cover bg-center pb-16 text-white">
      <img
        src={`${banner}`}
        className="mx-auto h-full w-full object-cover md:w-3/4"
      />
    </div>
  );
};

HeroSection.displayName = "HeroSection";
export { HeroSection };
