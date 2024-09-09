const WaitingList: React.FC = () => {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold">
        Join the<span className="text-accent1"> Waitlist </span>
      </h1>
      <p className="mt-4 font-bold">
        Fill in the form to get in touch with a representative
      </p>
    </div>
  );
};
WaitingList.displayName = "ContactPage";

export { WaitingList };
