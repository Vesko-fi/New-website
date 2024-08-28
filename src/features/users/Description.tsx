import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { heroImg } from "@constants/assets";

const Description = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-12 md:flex-row">
      <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
          It's Not Just About Local Retail, <span className="text-accent1">Vesko{' '}</span> 
          Connects You with{' '}<span className="text-accent1">Vendors Across Finland</span>
          </h1>
          <p className="text-sm xl:text-base">
          Shop online from a wide range of brands and retail stores across Finland. 
          Vesko also lets you connect with vendors in unique ways, 
          enhancing your customer service and shopping experience.
          </p>
        </div>
        <img src={heroImg} className="sm:w-96 lg:w-[500px] xl:w-auto" />
      </Container>
    </Section>
  )
}
Description.displayName = "Description";

export { Description };
