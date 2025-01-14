import {
  anna,
  daniel,
  heikki,
  leo,
  lotta,
  mikko,
  miro,
  pinja,
  saima,
  veikko,
} from "@constants/assets";
import { EventSection, Speaker } from "../constants/types";

export const keynotes: Speaker[] = [
  {
    id: 1,
    name: "Leo Fadi",
    title: "Keynote",
    description: "CEO & Founder Vesko Ltd",
    image: `${leo}`,
  },
  {
    id: 2,
    title: "Keynote",
    name: "Heikki Immonen",
    description:
      "Principal Lecturer of Entrepreneurship at Karelia UAS and Samota Co-founder at Hifiction Oy ",
    image: `${heikki}`,
  },
  {
    id: 3,
    title: "Keynote",
    name: "Pinja Konttinen",
    description: "Development Manager at Business Joensuu & ICT Hub Joensuu",
    image: `${pinja}`,
  },
  {
    id: 4,
    title: "Keynote",
    name: "Mikko Jarvilheto",
    description:
      "Senior Business Advisor at Business Joensuu & Award winning innovator.",
    image: `${mikko}`,
  },
  {
    id: 4,
    title: "Keynote",
    name: "Anna Logrén",
    description: "Project Manager at University of Eastern Finland.",
    image: `${anna}`,
  },
  {
    id: 4,
    title: "Keynote",
    name: "Veikko Miettinen",
    description: "Project coordinator at University of Eastern Finland.",
    image: `${veikko}`,
  },
  {
    id: 4,
    title: "Keynote",
    name: "Lotta Lilja",
    description: "Founder at Circutus Ltd.",
    image: `${lotta}`,
  },
  {
    id: 4,
    title: "Keynote",
    name: "Daniel Bågeberg",
    description: "Entrepreneur & Lecturer at Karelia UAS",
    image: `${daniel}`,
  },
];

export const presenters: Speaker[] = [
  {
    id: 1,
    title: "Presenter",
    name: "Miro Ryynänen",
    description: "Operation manager at Tier Mobility ",
    image: `${miro}`,
  },
  {
    id: 2,
    title: "Presenter",
    name: "Saima Haque",
    description: "Communication and Marketing specialist",
    image: `${saima}`,
  },
];

export const eventSections: EventSection[] = [
  {
    sectionTitle: "Stand Area Open",
    items: [
      {
        time: "15:00",
        title: "Stand Area Open",
      },
    ],
  },
  {
    sectionTitle: "Company Stage (in Finnish)",
    items: [
      { time: "16:25", title: "Intro, welcome to MIOPIA" },
      { time: "16:30", title: "Veikko Miettinen" },
      { time: "16:40", title: "Daniel Bågeberg" },
      { time: "16:50", title: "Heikki Immonen" },
      { time: "17:10", title: "Kati Hämäläinen" },
      { time: "17:20", title: "Leo Fadi" },
    ],
  },
  {
    sectionTitle: "Student Stage (in English)",
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
    sectionTitle: "Networking for the Companies",
    items: [
      {
        time: "17:30",
        title: "Networking for the companies",
      },
    ],
  },
];
