import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback } from "react";

import emailjs from "@emailjs/browser";

import { Form } from "@components/forms/form";
import { SubmitButton } from "@components/forms/SubmitButton";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";
import { validateForm } from "@utils/formValidationUtils";

import { DialogeBox } from "@components/ui/DialogBox";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const initialFormData = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const initialErrorState = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  };

  const [errors, setErrors] = useState(initialErrorState);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    message: "",
  });

  const checkFormCompletion = () => {
    return Object.values(formData).some((value) => value === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleValidateForm = useCallback(() => {
    const validationErrors = validateForm(formData, t);
    setErrors(validationErrors);
    return (
      !validationErrors.first_name &&
      !validationErrors.last_name &&
      !validationErrors.email &&
      !validationErrors.phone_number &&
      !validationErrors.message
    );
  }, [formData, t]);
  useEffect(() => {
    if (isSubmitted) {
      handleValidateForm();
    }
  }, [formData, isSubmitted, handleValidateForm]);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!handleValidateForm()) {
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

          setDialogContent({
            message: t("contact.successMessage"),
          });
          setDialogVisible(true);
          setFormData(initialFormData);
          setIsSubmitted(false);
        },
        (error) => {
          console.log(error.text);
          setDialogContent({
            message: t("contact.errorMessage"),
          });
          setDialogVisible(true);
        }
      );
  };

  return (
    <>
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
            <SubmitButton
              isSubmitting={isSubmitted || !errors}
              isDisabled={checkFormCompletion()}
            />
          </>
        }
      >
        <div>
          <Label htmlFor="first_name">{t("contact.firstName")}</Label>
          <Input
            id="first_name"
            type="text"
            placeholder={t("contact.firstName")}
            value={formData.first_name}
            onChange={handleChange}
            className={errors.first_name && isSubmitted ? "border-red-500" : ""}
          />
          {errors.first_name && isSubmitted && (
            <p className="mt-1 text-sm text-red-500">{errors.first_name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="last_name">{t("contact.lastName")}</Label>
          <Input
            id="last_name"
            type="text"
            placeholder={t("contact.lastName")}
            value={formData.last_name}
            onChange={handleChange}
            className={errors.last_name && isSubmitted ? "border-red-500" : ""}
          />
          {errors.last_name && isSubmitted && (
            <p className="mt-1 text-sm text-red-500">{errors.last_name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">{t("contact.email")}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t("contact.email")}
            value={formData.email}
            onChange={handleChange}
            className={errors.email && isSubmitted ? "border-red-500" : ""}
          />
          {errors.email && isSubmitted && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone_number">{t("contact.phoneNumber")}</Label>
          <Input
            id="phone_number"
            type="text"
            placeholder={t("contact.phoneNumber")}
            value={formData.phone_number}
            onChange={handleChange}
            className={
              errors.phone_number && isSubmitted ? "border-red-500" : ""
            }
          />
          {errors.phone_number && isSubmitted && (
            <p className="mt-1 text-sm text-red-500">{errors.phone_number}</p>
          )}
        </div>
      </Form>{" "}
      {dialogVisible && <DialogeBox message={dialogContent.message} />}
    </>
  );
};

ContactForm.displayName = "ContactPage";

export { ContactForm };
