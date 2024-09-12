import emailjs from "emailjs-com";

import { Form } from "@components/forms/form";
import { SubmitButton } from "@components/forms/SubmitButton";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const WaitingListForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    Company_name: "",
    sell: "",
    linkedIn: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.persist();
    e.preventDefault();

    const params = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone_number: formData.phone_number,
      Company_name: formData.Company_name,
      sell: formData.sell,
      linkedIn: formData.linkedIn,
      message: formData.message,
    };
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_DEMO as string,
        params,
        import.meta.env.VITE_EMAILJS_USER_ID as string
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Form
      onSubmit={sendEmail}
      additional={
        <>
          <div>
            <Label htmlFor="message">{t("waitlist.message")}</Label>
            <textarea
              id="message"
              className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={t("waitlist.messagePlaceholder")}
              rows={5}
              onChange={handleChange}
            />
          </div>
          <SubmitButton />
        </>
      }
    >
      <div>
        <Label htmlFor="first_name">{t("waitlist.firstName")}</Label>
        <Input
          id="first_name"
          type="text"
          placeholder={t("waitlist.firstName")}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="last_name">{t("waitlist.lastName")}</Label>
        <Input
          id="last_name"
          type="text"
          placeholder={t("waitlist.lastName")}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="email">{t("waitlist.email")}</Label>
        <Input
          id="email"
          type="text"
          placeholder={t("waitlist.email")}
          required
          onChange={handleChange}
        />
      </div>{" "}
      <div>
        <Label htmlFor="number">{t("waitlist.phoneNumber")}</Label>
        <Input
          id="number"
          type="number"
          placeholder={t("waitlist.phoneNumber")}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="Company_name">{t("waitlist.companyRole")}</Label>
        <Input
          id="Company_name"
          type="text"
          placeholder={t("waitlist.companyRole")}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="sell">{t("waitlist.sell")}</Label>
        <Input
          id="sell"
          type="text"
          placeholder={t("waitlist.sell")}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="location">{t("waitlist.location")}</Label>
        <Input
          id="sell"
          type="text"
          placeholder={t("waitlist.location")}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="linkedin">{t("waitlist.linkedin")}</Label>
        <Input
          id="sell"
          type="text"
          placeholder={t("waitlist.linkedin")}
          required
          onChange={handleChange}
        />
      </div>
    </Form>
  );
};

WaitingListForm.displayName = "ContactPage";

export { WaitingListForm };
