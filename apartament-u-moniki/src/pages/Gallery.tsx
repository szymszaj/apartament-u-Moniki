import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const images = [
    "/img/salon4.jpg",
    "/img/salon2.jpg",
    "/img/salon3.jpg",
    "/img/sypialnia.jpg",
    "/img/sypialnia2.jpg",
    "/img/kuchnia1.jpg",
    "/img/kuchnia2.jpg",
    "/img/lazienka.jpg",
    "/img/lazienka3.jpg",
    "/img/jacuzzi.jpg",
    "/img/jacuzzi3.jpg",
    "/img/ogrod3.jpg",
    "/img/ogrod4.jpg",
    "/img/ogrod5.jpg",
    "/img/ogrod6.jpg",
  ];

  const imageCategories = {
    Salon: images.slice(0, 3),
    Sypialnia: images.slice(3, 5),
    Kuchnia: images.slice(5, 7),
    Łazienka: images.slice(7, 9),
    Ogród: images.slice(9, 15),
  };

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
    document.body.classList.add("lightbox-open");
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
    document.body.classList.remove("lightbox-open");
  };

  const nextImage = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  }, [images.length]);

  const prevImage = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, nextImage, prevImage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2 mt-16">Galeria</h1>
          <p className="text-muted-foreground mb-10">
            Przeglądaj zdjęcia naszego apartamentu i przekonaj się, jak
            wyjątkowe może być Twoje miejsce pobytu.
          </p>

          {Object.entries(imageCategories).map(([category, categoryImages]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryImages.map((image, index) => {
                  const globalIndex = images.indexOf(image);
                  return (
                    <div
                      key={index}
                      className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all group"
                      onClick={() => openImage(globalIndex)}
                    >
                      <img
                        src={image}
                        alt={`${category} ${index + 1}`}
                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-white/10"
          onClick={closeImage}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-foreground hover:bg-black/10 z-10"
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
          >
            <X className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground bg-white/50 hover:bg-white/80 z-10 h-14 w-14 rounded-full shadow-lg backdrop-blur-sm transition-all"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="h-10 w-10 text-primary" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground bg-white/50 hover:bg-white/80 z-10 h-14 w-14 rounded-full shadow-lg backdrop-blur-sm transition-all"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="h-10 w-10 text-primary" />
          </Button>

          <img
            src={images[selectedImageIndex]}
            alt="Powiększone zdjęcie"
            className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
