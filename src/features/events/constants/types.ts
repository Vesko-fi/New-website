export interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface VeskoInfo {
  title: string;
  description: string;
  image?: string; // Optional image or icon path
}

export type Speaker = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  other?: string;
};

export interface EventProgram {
  time: string;
  title: string;
  description?: string;
}

export interface EventSection {
  sectionTitle: string;
  items: EventProgram[];
}
