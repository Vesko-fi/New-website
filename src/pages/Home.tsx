import SEO from "@components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Vesko"
        keywords="vesko, services"
      />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Welcome to Vesko</h1>
      </div>
    </>
  );
};

export default Home;
