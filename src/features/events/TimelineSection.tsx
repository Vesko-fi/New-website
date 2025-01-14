import { eventSections } from "./constants/mock.data";
import { EventSection } from "./constants/types";

const TimelineSection = () => {
  return (
    <div className="px-6 py-16 md:px-12 lg:px-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-neutral-50">
        Event Program Timeline
      </h2>
      <div className="space-y-12">
        {eventSections.map((section: EventSection, index: number) => (
          <div key={index}>
            {/* Section Title */}
            <h3 className="mb-6 text-2xl font-bold text-teal-400">
              {section.sectionTitle}
            </h3>
            {/* Section Items */}
            <ul className="space-y-4">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 border-b pb-4 last:border-b-0"
                >
                  {/* Time */}
                  <div className="w-16 text-lg font-semibold text-neutral-200">
                    {item.time}
                  </div>
                  {/* Title and Description */}
                  <div>
                    <p className="text-lg font-bold text-neutral-50">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-sm text-neutral-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

TimelineSection.displayName = "TimelineSection";
export { TimelineSection };
