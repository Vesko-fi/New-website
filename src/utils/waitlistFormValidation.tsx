import { TFunction } from "i18next";

export const validatePhoneNumber = (phone: string) => {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(phone);
};

export const validateMessageLength = (message: string) => {
  return message.length >= 32 && message.length <= 499;
};

export const initialErrorState = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  message: "",
};

export const waitlistFormValidation = (
  formData: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    message: string;
    Company_name: string;
    sell: string;
    location: string;
    linkedIn: string;
  },
  t: TFunction
) => {
  const newErrors = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    Company_name: "",
    sell: "",
    location: "",
    linkedIn: "",
    message: "",
  };
  if (!formData.first_name) {
    newErrors.first_name = t("contact.error.requiredFirstName");
  }

  if (!formData.last_name) {
    newErrors.last_name = t("contact.error.requiredLastName");
  }

  if (!formData.email) {
    newErrors.email = t("contact.error.requiredEmail");
  }

  if (!validatePhoneNumber(formData.phone_number)) {
    newErrors.phone_number = t("contact.error.invalidPhoneNumber");
  }

  if (!validateMessageLength(formData.message)) {
    newErrors.message = t("contact.error.messageLength");
  }

  return newErrors;
};
