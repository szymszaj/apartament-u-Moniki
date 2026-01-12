import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wifi,
  Tv,
  Utensils,
  Waves,
  Wind,
  Trees,
  Car,
  ShowerHead,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBlocks from "@/components/AnimatedBlocks";
import LocationMap from "@/components/LocationMap";
import { footerLinks } from "@/components/links/links";
import HeroSlider from "@/components/HeroSlider/HeroSlider";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <HeroSlider />

      <section id="features" className="py-16 bg-beige-light">
        <div className="container">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold">
              Doskonały wybór na Twój pobyt
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Nasz apartament oferuje wyjątkowe udogodnienia i komfort, który
              sprawi, że poczujesz się jak w domu.
            </p>
          </div>

          <AnimatedBlocks />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-beige p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">
                Nowoczesne Wyposażenie
              </h3>
              <p className="text-muted-foreground">
                Apartament jest w pełni wyposażony w najnowocześniejszy sprzęt
                AGD, telewizor oraz szybkie Wi-Fi.
              </p>
            </div>
            <div className="bg-beige p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">
                Przyjazny dla Rodzin
              </h3>
              <p className="text-muted-foreground">
                Przestronne pokoje, wygodne łóżka i eleganckie meble zapewniają
                maksymalny komfort.
              </p>
            </div>
            <div className="bg-beige p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">
                Doskonała Lokalizacja
              </h3>
              <p className="text-muted-foreground">
                Położenie blisko Term, Zakopanego oraz Nowego Targu zapewnia
                wygodny dostęp do atrakcji, restauracji oraz sklepów.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-beige">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Udogodnienia</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Wszystko, czego potrzebujesz, by Twój pobyt był wygodny i
              bezproblemowy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Wifi, label: "Bezpłatne Wi-Fi" },
              { icon: Tv, label: "Telewizor Smart TV" },
              { icon: Utensils, label: "W pełni wyposażona kuchnia" },
              { icon: ShowerHead, label: "Prysznic z deszczownicą" },
              { icon: Wind, label: "Suszarka do włosów" },
              { icon: Trees, label: "Ogród z miejscem na grilla" },
              { icon: Car, label: "Bezpłatny parking" },
              { icon: Waves, label: "Jacuzzi / Balia" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-sm transition-all duration-300"
              >
                <div className="p-3 bg-white/50 rounded-full mb-3">
                  <item.icon className="h-6 w-6 text-primary/80" />
                </div>
                <span className="font-medium text-center text-foreground/90 text-sm md:text-base">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Link to="/gallery">Zobacz galerię zdjęć</Link>
            </Button>
          </div>
        </div>
      </section>

      <LocationMap />

      <Footer />
    </div>
  );
};

export default Index;
