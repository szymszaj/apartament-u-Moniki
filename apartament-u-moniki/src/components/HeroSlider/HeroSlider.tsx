import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { footerLinks } from "@/components/links/links";
import { heroImages } from "./data";
import { useHeroSlider } from "@/hooks/useHeroSlider";

const HeroSlider = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentImageIndex = useHeroSlider(heroImages.length);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center hero-img-mask"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-beige-light/50 to-beige-light/10 pointer-events-none"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl space-y-6 animate-slide-down">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Apartament u Moniki
          </h1>
          <p className="text-xl text-muted-foreground">
            Komfortowe miejsce do wypoczynku, które sprawi, że Twój pobyt będzie
            niezapomniany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/gallery">Zobacz Galerię</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href={footerLinks.social.booking.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Rezerwuj Teraz
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Button
          onClick={scrollToFeatures}
          variant="ghost"
          size="icon"
          className="rounded-full bg-beige-light/50 backdrop-blur-sm hover:bg-beige-light"
        >
          <ArrowDown />
        </Button>
      </div>
    </section>
  );
};

export default HeroSlider;
