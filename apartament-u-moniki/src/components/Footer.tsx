import { Instagram, BookOpen, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { footerLinks } from "./links/links";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige py-12 border-t border-beige-dark/30">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Apartament u Moniki</h3>
          <p className="text-muted-foreground">
            Komfortowy apartament, idealny zarówno na krótkie, jak i długie
            pobyty.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href={footerLinks.social.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-beige-light rounded-full hover:bg-beige-dark/20 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={footerLinks.social.booking.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-beige-light rounded-full hover:bg-beige-dark/20 transition-colors"
            >
              <BookOpen size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Menu</h3>
          <nav className="flex flex-col space-y-2">
            {footerLinks.menu.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Kontakt</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              <a
                href={footerLinks.contact.email.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {footerLinks.contact.email.label}
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-primary" />
              <a
                href={footerLinks.contact.phone.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {footerLinks.contact.phone.label}
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span className="text-muted-foreground">
                {footerLinks.contact.address}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-beige-dark/10 text-center text-muted-foreground text-sm">
        &copy; {currentYear} Apartament u Moniki. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;
