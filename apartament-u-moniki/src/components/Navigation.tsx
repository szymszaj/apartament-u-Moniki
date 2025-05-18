import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { footerLinks } from "./links/links";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);
  const [hoverWidth, setHoverWidth] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();

    if (navRect) {
      setHoverPosition(rect.left - navRect.left);
      setHoverWidth(rect.width);
    }
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
    <header className="sticky top-0 w-full bg-beige-light/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="text-2xl font-semibold tracking-tight z-10">
          Apartament u Moniki
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        <div
          ref={navRef}
          className="hidden md:block relative"
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 bg-beige-dark/0 transition-all duration-300 rounded-full -z-10 group-hover:bg-beige-dark/80">
            {hoverPosition !== null && (
              <div
                className="absolute top-1/2 -translate-y-1/2 h-10 bg-white rounded-full shadow-md transition-all duration-200 ease-out"
                style={{
                  left: `${hoverPosition}px`,
                  width: `${hoverWidth}px`,
                }}
              />
            )}
          </div>

          <nav className="flex items-center gap-6 px-4 py-2 rounded-full group">
            <Link
              to="/"
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors py-1.5 px-3 rounded-full relative z-10",
                isActivePath("/") && "text-foreground font-medium"
              )}
              onMouseEnter={handleMouseEnter}
            >
              Strona główna
            </Link>
            <Link
              to="/gallery"
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors py-1.5 px-3 rounded-full relative z-10",
                isActivePath("/gallery") && "text-foreground font-medium"
              )}
              onMouseEnter={handleMouseEnter}
            >
              Galeria
            </Link>
            <Link
              to="/opis"
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors py-1.5 px-3 rounded-full relative z-10",
                isActivePath("/opis") && "text-foreground font-medium"
              )}
              onMouseEnter={handleMouseEnter}
            >
              Opis
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors py-1.5 px-3 rounded-full relative z-10",
                isActivePath("/contact") && "text-foreground font-medium"
              )}
              onMouseEnter={handleMouseEnter}
            >
              Kontakt
            </Link>

            <div className="flex items-center gap-2 ml-4">
              <a
                href={footerLinks.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-foreground transition-all relative z-10"
                onMouseEnter={handleMouseEnter}
              >
                <Instagram size={20} />
              </a>
              <a
                href={footerLinks.social.booking.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-foreground transition-all relative z-10"
                onMouseEnter={handleMouseEnter}
              >
                <BookOpen size={20} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-beige-light z-40 animate-fade-in ">
          <nav className="flex flex-col p-6 space-y-6 bg-beige-light z-[100]">
            <Link
              to="/"
              className={cn("text-xl py-2", isActivePath("/") && "font-medium")}
              onClick={toggleMenu}
            >
              Strona główna
            </Link>
            <Link
              to="/gallery"
              className={cn(
                "text-xl py-2",
                isActivePath("/gallery") && "font-medium"
              )}
              onClick={toggleMenu}
            >
              Galeria
            </Link>
            <Link
              to="/opis"
              className={cn(
                "text-xl py-2",
                isActivePath("/opis") && "font-medium"
              )}
              onClick={toggleMenu}
            >
              Opis
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-xl py-2",
                isActivePath("/contact") && "font-medium"
              )}
              onClick={toggleMenu}
            >
              Kontakt
            </Link>

            <div className="flex items-center gap-4 pt-4">
              <a
                href={footerLinks.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-beige rounded-full"
              >
                <Instagram size={24} />
              </a>
              <a
                href={footerLinks.social.booking.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-beige rounded-full"
              >
                <BookOpen size={24} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
