const DemoInformation: React.FC = () => {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold">
        Get a<span className="text-accent1"> Demo</span>
      </h1>
      <p className="mb-4 mt-10 font-bold">
        Fill in the form to get in touch with a representative
      </p>
      <p className="mb-6">
        Have any questions or need assistance? We're here to help! Feel free to
        reach out to us via the form below, and one of our team members will get
        back to you as soon as possible. We value your inquiries and aim to
        provide a response within 24-48 hours.
      </p>

      <p className="mb-6">
        If you prefer, you can also email us directly at{" "}
        <a href="mailto:support@example.com" className="text-blue-500">
          support@example.com
        </a>{" "}
        or call our customer service team at (123) 456-7890 during regular
        business hours.
      </p>

      <p className="mb-6">
        We respect your privacy. Any information you provide will only be used
        to address your inquiry, and we will never share your details without
        your consent.
      </p>

      <p className="mb-6">
        Thank you for choosing us! We look forward to hearing from you.
      </p>
    </div>
  );
};
DemoInformation.displayName = "DemoInformation";

export { DemoInformation };
