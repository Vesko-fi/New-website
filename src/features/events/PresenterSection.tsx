import { presenters } from "./constants/mock.data";
import { Speaker } from "./constants/types";

const PresenterSection = () => {
  return (
    <div className="px-6 py-16 md:px-12 lg:px-8">
      <h2 className="mb-12 text-start text-4xl font-bold text-neutral-50 md:text-center">
        Presenters of MIOPIA 2025
      </h2>
      <div className="grid grid-cols-1 gap-4 md:gap-12 lg:grid-cols-2">
        {presenters.map((presenter: Speaker) => (
          <div
            key={presenter.id}
            className="flex flex-col items-start justify-between gap-6 p-6 md:flex-row-reverse lg:gap-8"
          >
            {/* Image Container */}
            <div className="flex-1">
              <div className="relative h-64 w-[200px] overflow-hidden rounded-lg">
                <img
                  src={presenter.image}
                  alt={presenter.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-1 flex-col space-y-4">
              <h3 className="pb-2 text-4xl font-bold text-neutral-50 md:pb-4 2xl:text-5xl">
                {presenter.title}
              </h3>
              <span className="text-3xl font-semibold text-neutral-50 md:text-4xl">
                {presenter.name}
              </span>
              <p className="text-neutral-300 md:text-xl">
                {presenter.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

PresenterSection.displayName = "PresenterSection";
export { PresenterSection };
