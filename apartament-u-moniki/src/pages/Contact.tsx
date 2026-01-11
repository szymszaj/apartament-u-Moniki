import { MapPin, Instagram, BookOpen, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { footerLinks } from "@/components/links/links";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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

                <ContactForm />
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
