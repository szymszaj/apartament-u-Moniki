import emailjs from "@emailjs/browser";

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

export const initEmailJS = () => {
  if (emailConfig.publicKey) {
    emailjs.init(emailConfig.publicKey);
  }
};

export const sendEmail = async (templateParams: {
  name: string;
  phone: string;
  message: string;
}) => {
  if (
    !emailConfig.serviceId ||
    !emailConfig.templateId ||
    !emailConfig.publicKey
  ) {
    throw new Error(
      "Konfiguracja EmailJS nie jest kompletna. Sprawdź zmienne środowiskowe."
    );
  }

  try {
    const result = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    );
    return result;
  } catch (error) {
    console.error("Błąd wysyłania wiadomości:", error);
    throw error;
  }
};
