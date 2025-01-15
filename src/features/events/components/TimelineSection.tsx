import { useTranslation } from "react-i18next";

import { EventSection } from "../constants/types";

import ActionButton from "@components/ui/ActionButton";

const TimelineSection = () => {
  const { t } = useTranslation();
  const eventSections: EventSection[] = [
    {
      sectionTitle: `${t("events.timeline.opening1")}`,
      items: [
        {
          time: "15:00",
          title: `${t("events.timeline.opening1")}`,
        },
      ],
    },
    {
      sectionTitle: `${t("events.timeline.opening2")}`,
      items: [
        { time: "16:25", title: `${t("events.welcome")}` },
        { time: "16:30", title: "Veikko Miettinen" },
        { time: "16:40", title: "Daniel Bågeberg" },
        { time: "16:50", title: "Heikki Immonen" },
        { time: "17:10", title: "Kati Hämäläinen" },
        { time: "17:20", title: "Leo Fadi" },
      ],
    },
    {
      sectionTitle: `${t("events.timeline.opening3")}`,
      items: [
        { time: "16:30", title: "Intro, welcome to MIOPIA" },
        { time: "16:35", title: "Pinja Konttinen" },
        { time: "16:50", title: "Leo Fadi" },
        { time: "17:00", title: "Lotta Lilja" },
        { time: "17:10", title: "Mikko Jarvilehto" },
        { time: "17:20", title: "Anna Logrén" },
      ],
    },
    {
      sectionTitle: `${t("events.timeline.networking")}`,
      items: [
        {
          time: "17:30",
          title: `${t("events.timeline.networking")}`,
        },
      ],
    },
  ];

  return (
    <div className="px-6 py-16 md:px-12 lg:px-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-neutral-50">
        {t("events.timeline.heading")}
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
      {/* Registration Section */}
      <div className="mt-24 space-y-12 pt-4">
        <hr className="mx-auto flex max-w-full self-center" />
        <div className="flex flex-col items-center gap-4">
          <ActionButton
            href="https://link.webropolsurveys.com/EP/32F6D81F7C730E78"
            buttonText={`${t("events.registration.button")}`}
            description={`${t("events.registration.text")}`}
            isExternal={true}
            className="w-64"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <ActionButton
            href="https://businessjoensuu.fi/sohjo2025"
            buttonText={`${t("events.visit")}`}
            description={`${t("events.learnMore")}`}
            isExternal={true}
            className="w-80 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
};

TimelineSection.displayName = "TimelineSection";
export { TimelineSection };
