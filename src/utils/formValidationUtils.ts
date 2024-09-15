export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(phone);
};

export const validateMessageLength = (message: string): boolean => {
  return message.length >= 32 && message.length <= 499;
};

export const validateForm = (
  formData: { phone_number: string; message: string },
  t: any
) => {
  const phoneError = !validatePhoneNumber(formData.phone_number)
    ? t("Please enter a valid phone number.")
    : "";
  const messageError = !validateMessageLength(formData.message)
    ? t("Message must be between 32 and 499 characters.")
    : "";

  return {
    phone_number: phoneError,
    message: messageError,
  };
};
