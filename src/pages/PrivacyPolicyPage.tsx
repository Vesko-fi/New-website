import { SEO } from "@components/SEO";
import { MainContents } from "@features/privacyPolicy/MainContents";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Vesko Praivacy Policy"
        keywords="vesko, privacy policy"
      />
      <MainContents />
    </>
  );
};

export default PrivacyPolicyPage;
