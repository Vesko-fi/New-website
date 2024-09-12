import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

import { Form } from "@components/forms/form";
import { SubmitButton } from "@components/forms/SubmitButton";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";
import { useState } from "react";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
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
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT as string,
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
            <Label htmlFor="message">{t("contact.messagePlaceholder")}</Label>
            <textarea
              id="message"
              className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={t("contact.messagePlaceholder")}
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <SubmitButton />
        </>
      }
    >
      <div>
        <Label htmlFor="first_name">{t("contact.firstName")}</Label>
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
          <Label htmlFor="last_name">{t("contact.lastName")}</Label>
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
          <Label htmlFor="email">{t("contact.email")}</Label>
          <Input
            id="email"
            type="text"
            placeholder={t("contact.email")}
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="phone_number">{t("contact.phoneNumber")}</Label>
        <Input
          id="phone_number"
          type="text"
          placeholder={t("contact.phoneNumber")}
          required
          value={formData.phone_number}
          onChange={handleChange}
        />
      </div>
    </Form>
  );
};
ContactForm.displayName = "ContactPage";

export { ContactForm };
