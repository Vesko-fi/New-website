import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

import { Form } from "@components/forms/form";
import { SubmitButton } from "@components/forms/SubmitButton";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";
import { useState } from "react";

const DemoForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    Company_name: "",
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
            <Label htmlFor="message">{t("demo.messagePlaceholder")}</Label>
            <textarea
              id="message"
              className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={t("demo.messagePlaceholder")}
              rows={5}
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <SubmitButton />
        </>
      }
    >
      <div>
        <Label htmlFor="first_name">{t("demo.firstName")}</Label>
        <Input
          id="first_name"
          type="text"
          placeholder="John"
          required
          value={formData.first_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <Label htmlFor="last_name">{t("demo.lastName")}</Label>
          <Input
            id="last_name"
            type="text"
            placeholder="Doe"
            required
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <div>
          <Label htmlFor="email">{t("demo.email")}</Label>
          <Input
            id="email"
            type="text"
            placeholder={t("demo.email")}
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="phone_number">{t("demo.phoneNumber")}</Label>
        <Input
          id="phone_number"
          type="number"
          placeholder={t("demo.phoneNumber")}
          required
          value={formData.phone_number}
          onChange={handleChange}
        />
      </div>{" "}
      <div>
        <div>
          <Label htmlFor="Company_name">{t("demo.companyRole")}</Label>
          <Input
            id="Company_name"
            type="text"
            placeholder={t("demo.companyRole")}
            required
            value={formData.Company_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="linkedIn">{t("demo.linkedin")}</Label>
        <Input
          id="linkedIn"
          type="text"
          placeholder={t("demo.linkedin")}
          required
          value={formData.linkedIn}
          onChange={handleChange}
        />
      </div>
    </Form>
  );
};
DemoForm.displayName = "DemoForm";

export { DemoForm };
