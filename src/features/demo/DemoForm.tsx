import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import emailjs from "emailjs-com";

import { Form } from "@components/forms/form";
import { SubmitButton } from "@components/forms/SubmitButton";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";
import { DialogeBox } from "@components/ui/DialogBox";
import { validateDemoForm } from "@utils/demoFormValidation";

const DemoForm: React.FC = () => {
  const { t } = useTranslation();
  const initialFormData = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    Company_name: "",
    linkedIn: "",
    message: "",
  };
  const initialErrorState = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    Company_name: "",
    linkedIn: "",
    message: "",
  };

  const [errors, setErrors] = useState(initialErrorState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogContent, setDialogContent] = useState({ message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const checkFormCompletion = () => {
    return Object.values(formData).some((value) => value === "");
  };
  const handleValidateForm = useCallback(() => {
    const validationErrors = validateDemoForm(formData, t);
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
          setDialogContent({
            message: t("demo.successMessage"),
          });
          setDialogVisible(true);
          setFormData(initialFormData);
          setIsSubmitted(false);
        },
        (error) => {
          console.log(error.text);
          setDialogContent({
            message: t("demo.errorMessage"),
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
              <Label htmlFor="message">{t("demo.message")}</Label>
              <textarea
                id="message"
                className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder={t("demo.messagePlaceholder")}
                rows={5}
                onChange={handleChange}
                value={formData.message}
              />{" "}
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
          <Label htmlFor="first_name">{t("demo.firstName")}</Label>
          <Input
            id="first_name"
            type="text"
            placeholder="John"
            required
            value={formData.first_name}
            onChange={handleChange}
          />{" "}
          {errors.first_name && isSubmitted && (
            <p className="mt-1 text-sm text-red-500">{errors.first_name}</p>
          )}
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
            />{" "}
            {errors.last_name && isSubmitted && (
              <p className="mt-1 text-sm text-red-500">{errors.last_name}</p>
            )}
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
            />{" "}
            {errors.email && isSubmitted && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="phone_number">{t("demo.phoneNumber")}</Label>
          <Input
            id="phone_number"
            type="text"
            placeholder={t("demo.phoneNumber")}
            required
            value={formData.phone_number}
            onChange={handleChange}
          />{" "}
          {errors.phone_number && isSubmitted && (
            <p className="mt-1 text-sm text-red-500">{errors.phone_number}</p>
          )}
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
      </Form>{" "}
      {dialogVisible && <DialogeBox message={dialogContent.message} />}
    </>
  );
};
DemoForm.displayName = "DemoForm";

export { DemoForm };
