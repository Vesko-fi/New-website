import { Link } from "./ui/Link";

const Brand: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-end py-24">
        <h2 className="text-4xl font-bold text-white">Build Your Brand</h2>
        <p className="mb-2 mt-6 text-balance text-center text-sm text-white md:px-24">
          <span className="block">
            See how omnichannel powered marketplace will help you to build your
            brand.
          </span>
          <span>Be the first to access early version of Vesko.</span>
        </p>
        <div className="flex flex-col items-center gap-3 py-4 md:flex-row">
          <Link variant="primary" size="md" href="/">
            Get a Demo
          </Link>
          <span className="px-4 text-white">OR</span>
          <Link
            size="md"
            href="/"
            variant="secondary"
            className="bg-white hover:bg-white"
          >
            Join the WishList
          </Link>
        </div>
      </div>
    </>
  );
};

Brand.displayName = "Brand";

export default Brand;
