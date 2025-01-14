import { banner } from "@constants/assets";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] object-cover text-white">
      <div className="absolute inset-0 bg-opacity-40">
        <img
          src={`${banner}`}
          className="mx-auto h-full object-fill md:w-3/4"
        />
      </div>
      <div className="absolute inset-0 flex h-full flex-col justify-center px-4 pt-24 md:pt-28">
        <button className="h-16 w-36 self-center rounded-lg bg-pink-600 py-3 text-lg md:h-20 md:w-[440px]">
          <p className="font-extrabold md:text-3xl lg:text-5xl">12.3.2025</p>
        </button>
      </div>
    </div>
  );
};

HeroSection.displayName = "HeroSection";
export { HeroSection };
