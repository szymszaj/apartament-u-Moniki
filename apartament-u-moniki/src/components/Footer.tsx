import { Instagram, BookOpen, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { footerLinks } from "./links/links";
import { navigationLinks } from "@/data/navData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige-light/30 border-t border-beige-dark/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container px-4 py-12 md:py-16 flex flex-col items-center text-center">
        <div className="mb-6 space-y-4 max-w-lg mx-auto">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
            Apartament u Moniki
          </h3>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            Przestrzeń stworzona z myślą o Twoim komforcie.
            <br className="hidden md:block" /> Idealne miejsce na krótki i długi
            pobyt.
          </p>
        </div>

        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 text-base font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full opacity-50" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-10 w-full max-w-4xl border-t border-b border-beige-dark/10 py-8">
          <div className="flex flex-col items-center space-y-3 group">
            <div className="p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <a
              href={footerLinks.contact.email.href}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              Napisz do nas
            </a>
            <span className="text-sm text-muted-foreground">
              {footerLinks.contact.email.label}
            </span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Obserwuj nas
            </span>
            <div className="flex gap-4">
              <a
                href={footerLinks.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href={footerLinks.social.booking.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white text-primary border border-beige-dark/20 rounded-full shadow-lg hover:border-primary/50 hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                <BookOpen size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3 group">
            <div className="p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <a
              href={footerLinks.contact.phone.href}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              Zadzwoń
            </a>
            <span className="text-sm text-muted-foreground">
              {footerLinks.contact.phone.label}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center text-muted-foreground bg-white/50 px-4 py-2 rounded-full border border-beige-dark/5">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm">{footerLinks.contact.address}</span>
          </div>

          <div className="text-xs text-muted-foreground/60 pt-4">
            &copy; {currentYear} Apartament u Moniki. Wszelkie prawa
            zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
