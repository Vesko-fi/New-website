const WaitingList: React.FC = () => {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold">
        Join the<span className="text-accent1"> Waitlist </span>
      </h1>
      <p className="mb-4 mt-10 font-bold">
        Fill in the form to get in touch with a representative
      </p>
      <p className="mb-6">
        Exciting things are on the way! Join our waiting list to be the first to
        know when we launch. By signing up, you'll get exclusive early access,
        special updates, and more—directly to your inbox.
      </p>

      <p className="mb-6">
        Our next release is just around the corner, and we're thrilled to share
        it with you. Be part of the journey by adding your name to the list, and
        we’ll keep you posted on all the exciting developments.
      </p>

      <p className="mb-6">
        Don’t miss out on this opportunity! Spaces are limited, and those on our
        waiting list will have priority access.
      </p>

      <p className="mb-6">
        Sign up now and get ready for something special. We can't wait to have
        you with us!
      </p>
    </div>
  );
};
WaitingList.displayName = "ContactPage";

export { WaitingList };
