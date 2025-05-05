import { useState } from "react";
import { Phone, MapPin, Send, Instagram, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { footerLinks } from "@/components/links/links";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Wiadomość od ${formData.name}`;
    const body =
      `Imię: ${formData.name}%0D%0A` +
      `Numer telefonu: ${formData.phone}%0D%0A%0D%0A` +
      `Wiadomość:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:${
      footerLinks.contact.email.label
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Kontakt</h1>
          <p className="text-muted-foreground mb-10">
            Masz pytania? Skontaktuj się z nami bezpośrednio lub skorzystaj z
            formularza kontaktowego.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Imię i nazwisko *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-beige-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Numer telefonu
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-beige-light"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
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
                    className="resize-none bg-beige-light"
                  />
                </div>

                <Button type="submit" className="w-full">
                  <>
                    <Send className="h-4 w-4 mr-2" /> Wyślij wiadomość
                  </>
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-beige p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                  Informacje kontaktowe
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${footerLinks.contact.email.label}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {footerLinks.contact.email.label}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <a
                        href={footerLinks.contact.phone.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {footerLinks.contact.phone.label}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Adres</p>
                      <p className="text-muted-foreground">
                        {footerLinks.contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-beige p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                  Social media i rezerwacje
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 mr-3 text-primary" />
                    <a
                      href={footerLinks.social.instagram.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Apartament u Moniki
                    </a>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-3 text-primary" />
                    <a
                      href={footerLinks.social.booking.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Rezerwuj przez Booking.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-beige-dark/20">
                <h2 className="text-xl font-semibold mb-4">
                  Godziny odpowiedzi
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Poniedziałek - Piątek:</span>
                    <span>09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sobota:</span>
                    <span>10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Niedziela:</span>
                    <span>10:00 - 16:00</span>
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
