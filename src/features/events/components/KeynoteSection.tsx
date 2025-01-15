import { useTranslation } from "react-i18next";
import { Speaker } from "../constants/types";
import {
  anna,
  daniel,
  heikki,
  leo,
  lotta,
  mikko,
  pinja,
  veikko,
} from "@constants/assets";

const KeynoteSection = () => {
  const { t } = useTranslation();
  const keynotes: Speaker[] = [
    {
      id: 1,
      title: "Keynote",
      name: "Leo Fadi",
      description: `${t("events.speakers.speaker1")}`,
      image: `${leo}`,
    },
    {
      id: 2,
      title: "Keynote",
      name: "Heikki Immonen",
      description: `${t("events.speakers.speaker2")}`,
      image: `${heikki}`,
    },
    {
      id: 3,
      title: "Keynote",
      name: "Pinja Konttinen",
      description: `${t("events.speakers.speaker3")}`,
      image: `${pinja}`,
    },
    {
      id: 4,
      title: "Keynote",
      name: "Mikko Jarvilheto",
      description: `${t("events.speakers.speaker4")}`,
      image: `${mikko}`,
    },
    {
      id: 5,
      title: "Keynote",
      name: "Anna Logrén",
      description: `${t("events.speakers.speaker5")}`,
      image: `${anna}`,
    },
    {
      id: 6,
      title: "Keynote",
      name: "Veikko Miettinen",
      description: `${t("events.speakers.speaker6")}`,

      image: `${veikko}`,
    },
    {
      id: 7,
      title: "Keynote",
      name: "Lotta Lilja",
      description: `${t("events.speakers.speaker7")}`,

      image: `${lotta}`,
    },
    {
      id: 8,
      title: "Keynote",
      name: "Daniel Bågeberg",
      description: `${t("events.speakers.speaker8")}`,
      image: `${daniel}`,
    },
  ];

  return (
    <div className="px-6 pt-16 md:px-12 lg:px-8">
      <h2 className="mb-12 text-start text-4xl font-bold text-neutral-50 md:text-center">
        {t("events.speakers.heading")}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:gap-12 lg:grid-cols-2">
        {keynotes.map((keynote: Speaker) => (
          <div
            key={keynote.id}
            className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row-reverse lg:gap-8"
          >
            {/* Image Container */}
            <div className="flex-1">
              <div className="relative h-64 w-[200px] overflow-hidden rounded-lg">
                <img
                  src={keynote.image}
                  alt={keynote.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-1 flex-col space-y-3 md:space-y-6">
              <h3 className="pb-2 text-4xl font-bold text-neutral-50 md:pb-4 2xl:text-5xl">
                {keynote.title}
              </h3>
              <span className="text-3xl font-semibold text-neutral-50 2xl:text-4xl">
                {keynote.name}
              </span>
              <p className="text-neutral-300 md:text-xl">
                {keynote.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

KeynoteSection.displayName = "KeynoteSection";
export { KeynoteSection };
