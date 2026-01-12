import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { footerLinks } from "./links/links";
import { navigationLinks } from "@/data/navData";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out px-4 py-2 md:py-3",
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        <div className="w-full max-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 shadow-xl rounded-full px-6 py-2 flex items-center justify-between transition-all duration-300 hover:bg-white/80 hover:shadow-2xl hover:scale-[1.01]">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold tracking-tight z-10 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Apartament u Moniki
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <nav className="flex items-center gap-6 bg-transparent px-2 py-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative text-base font-medium transition-colors duration-300 hover:text-primary group py-2",
                    isActivePath(link.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}

                  <span
                    className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary transition-all duration-300",
                      isActivePath(link.href)
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0 group-hover:scale-75 group-hover:opacity-100"
                    )}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 ml-4 border-l border-gray-200 pl-4 py-1">
              <a
                href={footerLinks.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href={footerLinks.social.booking.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <BookOpen size={20} />
              </a>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative z-50 hover:bg-transparent"
            onClick={toggleMenu}
          >
            <div className="flex flex-col gap-1.5 items-end justify-center w-6 h-6">
              <span
                className={cn(
                  "w-6 h-0.5 bg-foreground transition-all duration-300 block",
                  isMenuOpen ? "-rotate-45 -translate-y-[2px]" : "translate-y-0"
                )}
              />
              <span
                className={cn(
                  "w-6 h-0.5 bg-foreground transition-all duration-300 block",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "w-4 h-0.5 bg-foreground transition-all duration-300 block",
                  isMenuOpen
                    ? "w-6 rotate-45 -translate-y-[10px]"
                    : "translate-y-0"
                )}
              />
            </div>
          </Button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-[20px] md:hidden transition-all duration-500 flex flex-col items-start justify-center pl-10",
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-start gap-8 w-full max-w-sm">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-4xl font-light tracking-tight transition-all duration-300 hover:translate-x-4 hover:text-primary hover:font-medium flex items-center gap-4 group",
                isActivePath(link.href)
                  ? "text-primary font-medium translate-x-4"
                  : "text-muted-foreground"
              )}
              onClick={toggleMenu}
            >
              <span
                className={cn(
                  "w-3 h-3 rounded-full bg-primary transition-all duration-300",
                  isActivePath(link.href)
                    ? "scale-100"
                    : "scale-0 group-hover:scale-100"
                )}
              />
              {link.label}
            </Link>
          ))}

          <div className="w-16 h-[1px] bg-border my-4 ml-7" />

          <div className="flex items-center gap-8 ml-7">
            <a
              href={footerLinks.social.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white shadow-lg rounded-2xl hover:bg-pink-50 hover:text-pink-600 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
            >
              <Instagram
                size={28}
                className="transition-transform group-hover:rotate-12"
              />
            </a>
            <a
              href={footerLinks.social.booking.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white shadow-lg rounded-2xl hover:bg-blue-50 hover:text-blue-600 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
            >
              <BookOpen
                size={28}
                className="transition-transform group-hover:-rotate-12"
              />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
