import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { Form } from "@components/forms/form";
import { SubmitButton } from "@components/forms/SubmitButton";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";
import { useState, useEffect, useCallback } from "react";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    phone_number: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const validateMessageLength = (message: string) => {
    return message.length >= 32 && message.length <= 499;
  };

  const validateForm = useCallback(() => {
    const phoneError = !validatePhoneNumber(formData.phone_number)
      ? t("Invalid phone number format. Please enter a valid number.")
      : "";
    const messageError = !validateMessageLength(formData.message)
      ? t("Message must be between 32 and 499 characters.")
      : "";

    setErrors({
      phone_number: phoneError,
      message: messageError,
    });

    return !phoneError && !messageError;
  }, [formData, t]);

  useEffect(() => {
    if (isSubmitted) {
      validateForm();
    }
  }, [formData, isSubmitted, validateForm]);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!validateForm()) {
      return;
    }

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
            <Label htmlFor="message">{t("contact.message")}</Label>
            <textarea
              id="message"
              className={`block w-full resize-none rounded-lg border ${
                errors.message && isSubmitted
                  ? "border-red-500"
                  : "border-gray-300"
              } bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
              placeholder={t("contact.messagePlaceholder")}
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && isSubmitted && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
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
            type="email"
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
          className={errors.phone_number && isSubmitted ? "border-red-500" : ""}
        />
        {errors.phone_number && isSubmitted && (
          <p className="mt-1 text-sm text-red-500">{errors.phone_number}</p>
        )}
      </div>
    </Form>
  );
};
ContactForm.displayName = "ContactPage";

export { ContactForm };
