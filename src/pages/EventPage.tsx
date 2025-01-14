import { SEO } from "@components/SEO";
import { Events } from "@features/events/Events";

const EventPage = () => {
  return (
    <>
      <SEO
        title="Miopia"
        description="Miopia event 2025 - Learn more at https://businessjoensuu.fi"
        keywords="vesko, miopia, events, businessjoensuu"
      />
      <Events />
    </>
  );
};

export default EventPage;
