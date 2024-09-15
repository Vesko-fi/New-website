export const validatePhoneNumber = (phone: string) => {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(phone);
};

export const validateMessageLength = (message: string) => {
  return message.length >= 32 && message.length <= 499;
};
