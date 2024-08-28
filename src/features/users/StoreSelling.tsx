import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { heroImg } from "@constants/assets";

const StoreSelling = () => {
  return (
   <Section>
     <Container className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            See what your{' '}
            <span className="text-accent1">local retail stores</span> are selling
          </h1>
          <p className="text-sm xl:text-base">
            Soon you will be able to shop from your local retail stores with ease, 
            see a real-time stock level to ensure you don’t waste your time on uncertain shopping trips.
          </p>
        </div>
        <img src={heroImg} className="sm:w-96 lg:w-[500px] xl:w-auto" />
      </Container>
   </Section>
  )
}
StoreSelling.displayName = "StoreSelling";

export { StoreSelling };