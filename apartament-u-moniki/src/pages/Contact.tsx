import { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Send,
  Instagram,
  BookOpen,
  Mail,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { footerLinks } from "@/components/links/links";
import { initEmailJS, sendEmail } from "@/lib/emailjs";
import { toast } from "sonner";

const Contact = () => {
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-16 bg-gradient-to-b from-beige to-beige-dark/40">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-beige-dark bg-clip-text text-transparent mt-5">
              Skontaktuj się z nami
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Masz pytania? Chętnie odpowiemy! Wypełnij formularz, a my
              skontaktujemy się z Tobą jak najszybciej.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-beige-light rounded-2xl shadow-xl border border-beige-dark/30 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Wyślij wiadomość</h2>
                    <p className="text-sm text-muted-foreground">
                      Odpowiemy w ciągu 24 godzin
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <p className="text-xs text-muted-foreground">
                      * Pola wymagane
                    </p>
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
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-beige/50 rounded-2xl p-6 border border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">Rezerwuj teraz</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Sprawdź dostępność i zarezerwuj apartament
                </p>
                <div className="space-y-3">
                  <a
                    href={footerLinks.social.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-beige-light rounded-lg hover:bg-beige-dark/20 transition-all group"
                  >
                    <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href={footerLinks.social.booking.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-beige-light rounded-lg hover:bg-beige-dark/20 transition-all group"
                  >
                    <BookOpen className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Booking.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-beige to-beige-light rounded-2xl p-6 border border-beige-dark/20">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Dane kontaktowe</h3>
                    <p className="text-sm text-muted-foreground">
                      Wszystkie dane kontaktowe znajdziesz w stopce strony
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
