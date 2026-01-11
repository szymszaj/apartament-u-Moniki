import { useState, useEffect } from "react";
import { Phone, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { initEmailJS, sendEmail } from "@/lib/emailjs";
import { toast } from "sonner";
import { footerLinks } from "@/components/links/links";

interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

const ContactForm = ({ onSuccess, className }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendEmail({
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      });

      toast.success("Wiadomość została wysłana pomyślnie!");

      setFormData({
        name: "",
        phone: "",
        message: "",
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Błąd wysyłania:", error);
      toast.error(
        "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się bezpośrednio."
      );

      const subject = `Wiadomość od ${formData.name}`;
      const body =
        `Imię: ${formData.name}%0D%0A` +
        `Numer telefonu: ${formData.phone}%0D%0A%0D%0A` +
        `Wiadomość:%0D%0A${formData.message}`;
      const mailtoLink = `mailto:${
        footerLinks.contact.email.label
      }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}`;

      window.location.href = mailtoLink;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className || ""}`}>
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-foreground"
        >
          Imię i nazwisko *
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Jan Kowalski"
          className="h-12 bg-beige-light/50 border-beige-dark/20 focus:border-primary focus:ring-primary transition-all"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-foreground"
        >
          Numer telefonu
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+48 600 000 000"
            className="h-12 pl-11 bg-beige-light/50 border-beige-dark/20 focus:border-primary focus:ring-primary transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-foreground"
        >
          Wiadomość *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
          placeholder="Witam, chciałbym zapytać o..."
          className="resize-none bg-beige-light/50 border-beige-dark/20 focus:border-primary focus:ring-primary transition-all"
        />
        <p className="text-xs text-muted-foreground">* Pola wymagane</p>
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Wysyłanie...
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Wyślij wiadomość
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
